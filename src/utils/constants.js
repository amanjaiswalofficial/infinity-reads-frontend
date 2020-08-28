export const DEFAULT_APP_BAR_HEIGHT = 64
export const SAMPLE_BLOG_URL = "https://medium.com/the-renaissance-developer/learning-python-from-zero-to-hero-8ceed48486d5"
export const BLANK_IMAGE_URL = "https://via.placeholder.com/180"
export const SAMPLE_USER_PROFILE_URL = "http://www.github.com/amanjaiswalofficial"
export const SAMPLE_DATA = 
"Lorem Ipsum is simply dummy text of the printing and typesetting industry." + 
"Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
export const HOME_PATH = "/home"
export const LANDING_PAGE_PATH = "/"
export const SEARCH_PARAMS = [
    "search",
    "sort",
    "filter",
    "page"
]
export const SEARCH_BAR_MESSAGE = "Search blog here (e.g. Name, Content, Tags)" 
export const SORTBY_VALUES = [
    {
      value: "+title",
      label: "Title (A-Z)"
    },
    {
      value: "-title",
      label: "Title (Z-A)"
    },{
      value: "+date",
      label: "Most Recent"
    },
    {
      value: "-date",
      label: "Oldest"
    },
]
export const DEFAULT_FILTER_TAGS = [
    "Sample Tag 1", 
    "Sample Tag 2", 
    "Sample Tag 3"
]
export const DEFAULT_BLOGS = [
  {
      "id": 1,
      "title": "First Blog",
      "content": "Some content about first blog",
      "user_id": "adminUser@123",
      "tags": [
          "Sample Tag"
      ]
  },
  {
      "id": 2,
      "title": "Second Blog",
      "content": "Some content about second blog",
      "user_id": 43211234,
      "tags": [
          "Sample Tag"
      ]
  }
]
export const BLOG_LIMIT = 10

// Action types
export const RESET_NAVBAR_PROPS = "RESET_NAVBAR_PROPS"
export const REFRESH_STATE = "REFRESH_STATE"
export const CHANGE_MODE = "CHANGE_MODE"


// CSS Constants
export const LIGHT_MODE = "light"
export const DARK_MODE = "dark"
export const COLOR_MODE = {
    light : {
        colorSecondary: '#355C7D',
        body: "#FFFFFF",
        heading: "#222222",
        text: "#111111",
        bgMain: "#FFFFFF",
        // blogItem related CSS,
        blogBorderColor: "none",
        blogBorderHover: "1px solid #355C7D",
        blogBorderRadius: "0px 0px",
        blogShadow: "3px 3px #6C5B7B",
        authorWeight: "bold",

        // filterBox related CSS
        choiceBorderHover: "1px solid #355C7D",
        choiceTextHover: "#355C7D",

        // pagination related CSS
        pagBorderRadius: "0px 0px",

        //blogDialog related CSS
        textBoxBorderOnFocus: "2px solid #355C7D",
        textBoxBgOnFocus: "#FFFFFF",
        textBoxTitleColor: "#355C7D",

        //messageDialog related CSS
        messageTextColor: "aed1ff" 
    },
    dark : {
        colorSecondary: '#15F4EE',
        body: "#121212",
        heading: "#15F4EE",
        text: "#aed1ff",
        textSecondary: " #15F4EE",
        bgMain: "#1f1f1f",
        borderMain: "1px solid #15F4EE",
        // blogItem related CSS
        blogBorderColor: "0.5px solid #1f1f1f",
        blogBorderHover: "1px solid #15F4EE",
        blogBorderRadius: "3px 3px",
        blogShadow: "1px 1px 1px #15F4EE",
        authorWeight: "normal",

        // filterBox related CSS
        choiceBorderHover: "1px solid #15F4EE",
        choiceTextHover: "#15F4EE",
        
        //paginationBox related CSS
        pagBorderRadius: "3px 3px",

        //blogDialog related CSS
        textBoxBorderOnFocus: "2px solid #15F4EE",
        textBoxBgOnFocus: "#ffffff",
        textBoxTitleColor: "#15F4EE",

        //messageDialog related CSS
        messageTextColor: "#aed1ff" 
    }
}
