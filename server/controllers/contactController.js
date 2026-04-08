const Contact = require('../models/Contact');

// কন্টাক্ট ফর্মের মেসেজ ডাটাবেসে সেভ করার ফাংশন
exports.submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send message", error });
  }
};