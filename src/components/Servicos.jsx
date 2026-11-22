import Card from './Card'

function Servicos() {
  return (
    <section className="servicos">
      <Card
        id="surf"
        titulo="Surf"
        texto="Aulas de surf para todos os níveis, com deslocamento até a praia."
      />
      <Card
        id="pilates"
        titulo="Pilates"
        texto="Aulas de pilates para cuidar do corpo com calma e leveza."
      />
      <Card
      id="Yoga"
      titulo="Yoga"
      texto="Aulas de Yoga para cuidar e equilibrar corpo e mente."
      />
    </section>
  )
}

export default Servicos