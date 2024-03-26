import { Router } from "express";
import Finance from "../models/Finances.js";

const router = Router();

// Create finance route
router.post("/", async (request, response) => {
  try {
    const newFinance = new Finance(request.body);

    const data = await newFinance.save();

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

// Get all finance route
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}

    const data = await Finance.find(query);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Get a single finance by ID
router.get("/:id", async (request, response) => {
  try {
    const data = await Finance.findById(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Delete a finance input by ID
router.delete("/:id", async (request, response) => {
  try {
    const data = await Finance.findByIdAndRemove(request.params.id, {});

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Update a single finance input by ID
router.put("/:id", async (request, response) => {
  try {
    const body = request.body;

    const data = await Finance.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          financeName: body.financeName,
          cost: body.cost,
          runningTotal: body.runningTotal,
          type: body.type
        }
      },
      {
        new: true
      }
    );

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

export default router;
