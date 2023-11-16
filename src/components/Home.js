// Home.js
import React from 'react';

const Home = () => {
    return (
        <div className="bg-gray-900 superfont text-white flex flex-col md:flex-row items-center justify-center">
            {/* Parte Izquierda */}
            <div className="max-w-2xl p-8 ">
                {/* Parte superior */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2">Matías Benoni Peralta</h1>
                    <p className="text-lg mb-2">Ingeniero Civil en Computación e Informática.</p>
                    <p className=" text-base">+569 84282128 | matiasbenonip@gmail.com</p>
                </div>

                {/* Resumen Profesional */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Resumen Profesional</h2>
                    <p className="text-lg">
                        Apasionado por la tecnología y con un profundo interés en la programación, mi enfoque se
                        centra en abrazar desafíos tanto desde una perspectiva profesional como personal. Como
                        recién titulado, me encuentro ansioso por explorar nuevas oportunidades en el campo
                        laboral y contribuir con entusiasmo a proyectos innovadores que me permitan aplicar mis
                        conocimientos y habilidades de manera práctica y efectiva.
                    </p>
                </div>

                {/* Experiencia Laboral */}
                <div className="mb-8 ">
                    <h2 className="text-2xl mb-4">Experiencia Laboral</h2>
                    <div className="mb-4">
                        <h3 className="text-xl font-bold">Ennovate - Practica laboral 1</h3>
                        <p className="text-lg">Enero 2020 - Marzo 2020</p>
                        <ul className="list-disc list-inside mt-2">
                            <li>Desarrollo y aprendizaje de sistemas Cloud en Linux.</li>
                            <li>Desarrollo de actividades en Python.</li>
                            <li>Desarrollo de actividades en PHP, HTML y WordPress.</li>
                            <li>Actividades variadas en office.</li>
                        </ul>
                    </div>
                    <div className="mb-4 ">
                        <h3 className="text-xl font-bold">Fastcomcorp - Practica laboral 2</h3>
                        <p className="text-lg">Julio 2022 - Septiembre 2022</p>
                        <ul className="list-disc list-inside mt-2 ">
                            <li className=''>Maquetación de sistemas.</li>
                            <li className=''>Modelamiento y normalización de bases de datos SQL.</li>
                            <li className=''>Desarrollo y documentación de Apis.</li>
                            <li className=''>Desarrollo y documentación de pruebas QA.</li>
                            <li className=''>Reestructuración de páginas web mediante Wordpress.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Parte Derecha */}
            <div className="max-w-2xl p-8 ">
                {/* Formación Académica */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Formación Académica</h2>
                    <ul className="list-disc list-inside">
                        <li className=''>Ingeniería Civil en Computación e Informática - Universidad Mayor – 2023.</li>
                        <li className=''>Enseñanza media, Liceo Leonardo Murialdo, 2012 – 2015.</li>
                        <li className=''>Enseñanza básica, Liceo Leonardo Murialdo, 2004 – 2011.</li>
                    </ul>
                </div>

                {/* Conocimientos */}
                <div className="mb-8 ">
                    <h2 className="text-2xl font-bold mb-4">Conocimientos</h2>
                    <ul className="list-disc list-inside">
                        <li className=''>Lenguajes de programación: C#, C++, Java y Python.</li>
                        <li className=''>Desarrollo web: HTML, CSS y JavaScript.</li>
                        <li className=''>Framework: Angular y React Js.</li>
                        <li className=''>Base de datos: Mysql, PostgresSQL, MariaDB y MongoDB.</li>
                    </ul>
                </div>

                {/* Cursos Realizados */}
                <div className=''>
                    <h2 className="text-2xl font-bold mb-4">Cursos Realizados</h2>
                    <ul className="list-disc list-inside">
                        <li className=''>Scrum Foundation Professional SFPC, CertiProf 2023.</li>
                        <li className=''>Foundational C#, FreeCodeCamp 2023.</li>

                        <li className=''>Scrum Fundamentals Certified, SCRUMstudy 2022.</li>
                        <li className=''>Introduction to Cybersecurity, Cisco 2020.</li>
                        <li className=''>Almacenamiento en la Nube con Google Cloud Platform, Plazti 2022.</li>
                        <li className=''>Fundamentos de Bases de Datos, Plazti 2022.</li>
                        <li className=''>Curso Profesional de Python, Plazti 2021.</li>
                        <li className=''>Introducción al Desarrollo Backend, Plazti 2021.</li>
                        <li className=''>Programación Orientada a Objetos: POO, Plazti 2021.</li>
                        <li className=''>Curso Básico de Python, Plazti 2021.</li>
                        <li className=''>Curso Profesional de Git y GitHub, Plazti 2021.</li>
                        <li className=''>Curso Práctico de Python: Creación de un CRUD, Plazti 2021.</li>
                        <li className=''>Complejidad Algorítmica con Python, Plazti 2021.</li>
                        <li className=''>Introducción al Pensamiento Computacional con Python, Plazti 2021.</li>
                        <li className=''>Python Intermedio: Comprehensions, Lambdas y Manejo de Errores, Platzi 2021.</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Home;
