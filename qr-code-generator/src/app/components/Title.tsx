interface TitleProps {
    title: string
}

export default function Title({ title } : TitleProps) {
    return(
        <section className="title-container">
            <h1 className="page-title"> {title} </h1>
        </section>  
        
    )
}

   
