const prisma = require('../client.js');

exports.getpl = async (req, res) => {
  try {
    console.log("Full Request Details:", {
      method: req.method,
      url: req.originalUrl,
      headers: req.headers,
      body: req.body,
      query: req.query
    });

    // Verify Prisma connection
    console.log("Checking Prisma Connection...");
    await prisma.$connect();
    console.log("Prisma Connected Successfully");

    // Detailed logging for plan retrieval
    console.log("Attempting to retrieve predefined plans...");
    const plans = await prisma.plan.findMany({
      where: { 
        predefined: true 
      },
      orderBy: { 
        amount: 'asc' 
      },
      select: {
        id: true,
        name: true,
        amount: true,
        intrest: true,
        duration: true,
        predefined: true
      }
    });

    console.log("Raw Plans Retrieved:", plans);

    // Enhanced error handling for no plans
    if (!plans || plans.length === 0) {
      console.warn("No predefined plans found in database");
      return res.status(404).json({ 
        message: "No predefined plans found", 
        details: "Check if plans have been seeded correctly" 
      });
    }

    // Successful response
    res.status(200).json({
      message: "Plans retrieved successfully",
      count: plans.length,
      plans: plans
    });

  } catch (error) {
    console.error("CRITICAL ERROR in getpl:", {
      message: error.message,
      stack: error.stack,
      name: error.name,
      code: error.code
    });

    // Differentiate between different types of errors
    if (error.code === 'P2002') {
      return res.status(409).json({ 
        error: "Unique constraint violation", 
        details: "A duplicate record was attempted" 
      });
    }

    if (error.code === 'P1001') {
      return res.status(503).json({ 
        error: "Database Connection Failed", 
        details: "Cannot connect to the database" 
      });
    }

    res.status(500).json({ 
      error: "Unexpected Server Error", 
      details: error.message,
      errorCode: error.code || 'UNKNOWN'
    });
  } finally {
    // Always disconnect to prevent connection leaks
    await prisma.$disconnect();
  }
};