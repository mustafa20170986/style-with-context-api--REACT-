const prisma = require('../client.js');

exports.tfs = async (req, res) => {
  const { receiverId, amount, senderId } = req.body;

  if (amount <= 0) {
    return res.status(400).json({ error: "Amount cannot be zero or negative" });
  }

  if (senderId === receiverId) {
    return res.status(400).json({ error: "You cannot send money to yourself" });
  }

  // Function to handle the transaction
  async function transactionRes(senderId, receiverId, amount) {
    return await prisma.$transaction(async (prisma) => {
      // Find the sender and receiver using Prisma's findUnique method
      const sender = await prisma.user.findUnique({
        where: { id: senderId },
      });

      if (!sender) {
        throw new Error("Sender not found");
      }

      if (sender.balance < amount) {
        throw new Error("Insufficient balance");
      }

      const receiver = await prisma.user.findUnique({
        where: { id: receiverId },
      });

      if (!receiver) {
        throw new Error("Receiver not found");
      }

      // Deduct balance from sender
      await prisma.user.update({
        where: { id: senderId },
        data: { balance: sender.balance - amount },
      });

      // Add balance to receiver
      await prisma.user.update({
        where: { id: receiverId },
        data: { balance: receiver.balance + amount },
      });

      // Record the transaction in the Transaction table
      const transaction = await prisma.transaction.create({
        data: {
          senderId,
          receiverId,
          amount,
          type: 'transfer',
        },
      });

      return transaction;
    });
  }

  try {
    const transactionResult = await transactionRes(senderId, receiverId, amount);
    res.status(200).json({ message: "Transaction successful", transactionResult });
  } catch (error) {
    console.error(error); // Handle specific errors
    if (error.message === "Sender not found") {
      return res.status(404).json({ error: error.message });
    } else if (error.message === "Insufficient balance") {
      return res.status(400).json({ error: error.message });
    } else if (error.message === "Receiver not found") {
      return res.status(404).json({ error: error.message });
    } else {
      // Generic error for unexpected issues
      return res.status(500).json({ error: "Transaction failed" });
    }
  }
};
