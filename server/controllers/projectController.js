const Project = require('../models/Project');

// সব প্রজেক্ট ডাটাবেস থেকে নিয়ে আসার ফাংশন
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};