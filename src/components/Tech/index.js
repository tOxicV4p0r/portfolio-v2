const Tech = ({ data, isHighlight }) => {
    return (
        <div className="flex flex-wrap gap-2">
            {
                data.map((item, i) => (
                    <div
                        key={`${item}-${i}`}
                        className={`${isHighlight ? "text-primarySubTitle" : "text-primarySubContent1"} text-sm rounded-md bg-primarySubContent2/[0.3] px-2 py-1`}
                    >
                        {item}
                    </div>
                ))
            }
        </div>
    )
}

export default Tech;