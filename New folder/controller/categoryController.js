import newJobCategory from "../models/categoryModel.js";


export const categoryController = async (req, res) => {
    const { jobCatTitle,jobCatLogo, jobCatDesc } = req.body;
    const nJobCategory =  new newJobCategory({
        jobCatTitle:jobCatTitle,
        jobCatLogo: jobCatLogo,
        jobCatDesc: jobCatDesc
    })
    
    try {
        await nJobCategory.save();
        res.json(nJobCategory);
        console.log("job category created");
    } catch (error) {
        console.log("job category not created");
    }
}