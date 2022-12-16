import { blogs } from "../data/index";
import data from "../data/data.json"

const getBlogDetail = (blogTitle) => blogs.find(blog => blog.title == blogTitle)
const getFilterProduct = (from, to) => data.filter(item => item.price > from && item.price < to)
const getSortProduct = (brand) => data.filter(item => item.brand === brand.toLowerCase())

const phoneCategory = () => data.filter(item => item.category === "phone")
const laptopCategory = () => data.filter(item => item.category === "laptop")
const tabletCategory = () => data.filter(item => item.category === "tablet")
const watchCategory = () => data.filter(item => item.category === "watch")
const networkdeviceCategory = () => data.filter(item => item.category === "networkdevice")
const loudspeakerCategory = () => data.filter(item => item.category === "loudspeaker")
const keyboardCategory = () => data.filter(item => item.category === "keyboard")
const favorite = () => data.filter(item => item.favorite === true);
const apple = () => data.filter(item=> item.brand === "apple")
const game = () => data.filter(item => item.type === "gaming")

export {
    getBlogDetail,
    getFilterProduct,
    getSortProduct,
    phoneCategory,
    laptopCategory,
    tabletCategory,
    watchCategory,
    networkdeviceCategory,
    keyboardCategory,
    loudspeakerCategory,
    favorite,
    apple,
    game
}