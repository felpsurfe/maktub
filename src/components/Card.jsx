function Card ({id, titulo, texto}) { 
    return (
        <article id={id} className="card">
            <div className="card-image">Imagem aqui</div>
            <h2>{titulo}</h2>
            <p>{texto}</p>
        </article>
    )
}

export default Card