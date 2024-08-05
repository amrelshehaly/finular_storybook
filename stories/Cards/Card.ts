
export type CardProps = {
    mode: "light" | "black"
    imgWidth?: number
    imgHeight?: number
    imgTop?: number
    width?: string
    height?: string
    img?: string
    title: string
    content: string
    titleStyle ?: string
    contentStyle?: string
}


export function CreateCard ({ mode, img, height, width, content, title, imgHeight=150, imgWidth=200, imgTop=50, titleStyle, contentStyle }: CardProps) {
    const box = document.createElement('div');
    const container = document.createElement('div');

    box.className = "relative"

    if(img){
        const imageContainer = document.createElement('div');
        const Image = document.createElement('img');
        Image.src = img
        Image.width = imgWidth
        Image.height = imgHeight

        // Interactive styling for Storybook
        Image.style.width = imgWidth + ""
        Image.style.height = imgHeight + ""

        imageContainer.append(Image)
        imageContainer.className = `absolute top-[-${imgTop}px]`
        container.append(imageContainer)
    }

    const titleClasses = mode === "light"? "text-[#23254E] text-[21px] font-bold py-[15px]" : "text-white text-[21px] font-medium py-[15px]" + `${titleStyle}`
    const contentClasses = mode === 'light'? `text-[#23254E] text-[14px] ${!img? "pb-[36px]": ''}` : `text-white text-[14px] ${!img? "pb-[36px]": ''}` + `${contentStyle}`

    const Title = document.createElement('div');
    Title.className = titleClasses
    Title.innerText = title

    const Content = document.createElement('div');
    Content.className = contentClasses
    Content.innerText = content


    container.append(Title)
    container.append(Content)


    const classes = "flex flex-col justify-center items-center rounded-lg max-w-[410px] min-w-[325px] px-[63px] text-center"
    container.className = [classes, `w-[${width}] h-[${height}]`, `${mode === 'light'? "bg-white": "bg-[#23254E]"}`].join(" ")


    // Interactive styling for Storybook
    container.style.width = width +""
    container.style.height = height +""

    box.append(container)

    return box
}