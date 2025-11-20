interface TitleProps {
    title: string
    classNameSection: string
    className: string
}

export default function Title({ title, classNameSection, className  } : TitleProps) {
    return(
        <section className={classNameSection}>
            <h1 className={className}> {title} </h1>
        </section>  
        
    )
}

   
