const testimonialModel = require('../models/testimonial-model.js')

///////////////////
/// add testimonial in database through form route
//////////////////
const AddTestimonial = async (req, res) => {
   try {

      const { Name, Designation, SocialMediaLink, Review } = req.body;
      const testi = await testimonialModel.create({
         Name,
         Designation,
         SocialMediaLink,
         Review,
         approval: "pending",
      });
      return res.status(201).json({
         success: true,
         message: "Testimonial submitted successfully. Awaiting admin approval.",
         testi,
      });

   } catch (error) {
      console.error("AddTestimonial error:", error);
      return res.status(500).json({
         success: false,
         message: "Failed to submit testimonial",
      });
   }
};
//////////////////////////////
///// to get pending testimonials in admin portal
//////////////////////////////

const getPendingTestimonials = async (req, res) => {
   try {
      const testimonials = await testimonialModel.find({
         approval: "pending",
      }).sort({ createdAt: -1 });

      res.status(200).json(testimonials);
   } catch (error) {
      res.status(500).json({ message: "Failed to fetch testimonials" });
   }
};


///////////////////////////////
/////// to get the approved testimonials
///////////////////////////////

const approveTestimonial = async (req, res) => {
   try {
      const { id } = req.params;

      await testimonialModel.findByIdAndUpdate(id, {
         approval: "approved",
      });

      res.status(200).json({ message: "Testimonial approved" });
   } catch (error) {
      res.status(500).json({ message: "Approval failed" });
   }
};

///////////////////////
///to delete the testimonials
////////////

const deleteTestimonial = async (req, res) => {
   try {
      const { id } = req.params;
      await testimonialModel.findByIdAndDelete(id);
      res.status(200).json({ message: "Testimonial rejected and deleted" });
   } catch (error) {
      res.status(500).json({ message: "Failed to delete testimonial" });
   }
};


///////////////////////
/////to get testimonials in admin that are approved or pending
////////////////////////

const getAdminTestimonials = async (req, res) => {
   try {
      const testimonials = await testimonialModel.find({
         approval: { $in: ["pending", "approved"] },
      }).sort({ createdAt: -1 });

      res.status(200).json(testimonials);
   } catch (error) {
      res.status(500).json({ message: "Failed to fetch testimonials" });
   }
};



module.exports = { AddTestimonial, approveTestimonial, getPendingTestimonials, deleteTestimonial, getAdminTestimonials };
















