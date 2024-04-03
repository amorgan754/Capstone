import { Router } from "express";
import Calendar from "../models/Calendar.js";

const router = Router();

// Create finance route
router.post("/", async (request, response) => {
  try {
    const newCalendar = new Calendar(request.body);

    const data = await newCalendar.save();

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

    const data = await Calendar.find(query);

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
    const data = await Calendar.findById(request.params.id);

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
    const data = await Calendar.findByIdAndRemove(request.params.id, {});

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

    const data = await Calendar.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          title: body.title,
          startDate: body.startDate,
          startTime: body.startTime,
          endDate: body.endDate,
          endTime: body.endTime
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
