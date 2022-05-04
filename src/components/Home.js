import Card from './Card';
import ContactCard from './ContactCard';
import './styles/Home.css'

const data = [
    {title: "Feria de Software", subtitle: "2020", text: 'La Feria de Software es la culminación de un proceso de meses de arduo trabajo que comienza cuando se forman equipos que conciben una idea de proyecto, definen metas, eligen a un líder o jefe de proyecto y desarrollan un producto bajo los conceptos de la Ingeniería de Software, lo que suele exigir el aprendizaje de nuevas herramientas, metodologías, técnicas de desarrollo y trabajo en equipo. Es una instancia educativa centrada en el "aprender-haciendo".', link: "/proyectos", button_title: "Ver Proyectos",img: "/images/start-up.png"},
    {title: "Versiones Anteriores",subtitle: "Proyectos", text:"Esta actividad se ha consolidado a lo largo del tiempo como una oportunidad en que los alumnos del Departamento de Informática de la Casa Central y del Campus Santiago de la Universidad Técnica Federico Santa María, muestran a la comunidad sus conocimientos, capacidad creativa, trabajo en equipo y emprendimiento.", link: "/versiones-anteriores", button_title:"Ver Proyectos Anteriores",img: "/images/calendar_1.png"},
    {title: "Contacto", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", img: ""}
]

function Home() {
    return (
        <div id="home">
            {data.map( (elem, index) => {
                if(index !== 2)
                    return <Card key={index} title={elem.title} text={elem.text} link={elem.link} img={elem.img} subtitle={elem.subtitle ? elem.subtitle : undefined} button_title={elem.button_title ? elem.button_title : undefined}/>
                else
                    return <ContactCard key={index} title={elem.title} text={elem.text} />
            })}
        </div>
    );
}

export default Home;