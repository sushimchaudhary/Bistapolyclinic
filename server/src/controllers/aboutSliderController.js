import AboutSlider from '../models/AboutSlider.js';

export const uploadSliderImages = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: 'No files uploaded' });
    }

    const savedImages = [];

    for (let file of req.files) {
      const imagePath = `/uploads/sliders/${file.filename}`; // ध्यान दिनुहोस् यो path

      const newSlider = new AboutSlider({
        imageUrl: imagePath,
      });

      const saved = await newSlider.save();
      savedImages.push(saved);
    }

    res.status(201).json({
      message: 'Slider images uploaded successfully!',
      data: savedImages,
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ message: 'Server error during upload' });
  }
};


export const getSliderImages = async (req, res) => {
  try {
    const sliders = await AboutSlider.find().sort({ uploadedAt: -1 });
    
    // पूरा URL बनाउन
    const updated = sliders.map(slider => ({
      ...slider._doc,
      imageUrl: `${req.protocol}://${req.get('host')}${slider.imageUrl}`,
    }));

    res.status(200).json(updated);
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ message: 'Failed to fetch slider images' });
  }
};




export const deleteSliderById = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await AboutSlider.findByIdAndDelete(id);  // Use AboutSlider here
    if (!deleted) {
      return res.status(404).json({ message: 'Slide not found' });
    }
    res.json({ message: 'Slide deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};





