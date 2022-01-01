function HeaderItem({ title, Icon }) {
    return (
        <div className="group cursor-pointer flex flex-col items-center w-12 sm:w-20 hover:text-white">
            <Icon className="h-8 mb-1 group-hover:animate-bounce"/>
            <p className="uppercase tracking-widest opacity-0 group-hover:opacity-100">{ title }</p>
        </div>
    )
}

export default HeaderItem
