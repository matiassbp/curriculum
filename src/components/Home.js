import React from 'react';
import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";
import { BiMailSend } from "react-icons/bi";

const Home = () => {
    return (
        <div className="bg-gray-900 superfont text-white flex flex-col md:flex-row items-center justify-center">
            {/* Parte Izquierda */}
            <div className="max-w-2xl p-8 izquierda">
                {/* Parte superior */}
                <div className="mb-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                        <div className="mb-2 md:mr-4 md:mb-2">
                            <h1 className="text-4xl font-bold mb-2">Matías Benoni Peralta.</h1>
                            <p className="text-base mb-1">Ingeniero Civil en Computación e Informática.</p>
                            <p className="text-base">+569 84282128 | matiasbenonip@gmail.com</p>
                        </div>
                        <div className="flex space-x-4 mt-2 md:mt-10 md:mr-14 logos">
                            <a href="https://linkedin.com/in/matías-benoni-peralta-1050541a0/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition duration-300">
                                <RiLinkedinFill className="h-10 w-10" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a href="mailto:matiasbenonip@gmail.com" target="_blank" rel="noopener noreferrer" className=" text-zinc-500 hover:text-zinc-200 transition duration-300">
                                <BiMailSend className="h-10 w-10" />
                                <span className="sr-only">Mail</span>
                            </a>
                            <a href="https://github.com/matiassbp" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition duration-300">
                                <RiGithubFill className="h-10 w-10" />
                                <span className="sr-only">GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Resumen Profesional */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Resumen Profesional</h2>
                    <p className="text-lg text-justify">
                        Apasionado por la tecnología y con un profundo interés en la programación, mi enfoque se
                        centra en abrazar desafíos tanto desde una perspectiva profesional como personal. Como
                        recién titulado, me encuentro ansioso por explorar nuevas oportunidades en el campo
                        laboral y contribuir con entusiasmo a proyectos innovadores que me permitan aplicar mis
                        conocimientos y habilidades de manera práctica y efectiva.
                    </p>
                </div>

                {/* Experiencia Laboral */}
                <div className="mb-8">
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
            <div className="max-w-2xl p-8 derecha">
                {/* Formación Académica */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Formación Académica</h2>
                    <ul className="list-disc list-inside">
                        <li>Ingeniería Civil en Computación e Informática - Universidad Mayor – 2023.</li>
                        <li>Enseñanza media, Liceo Leonardo Murialdo, 2012 – 2015.</li>
                        <li>Enseñanza básica, Liceo Leonardo Murialdo, 2004 – 2011.</li>
                    </ul>
                </div>

                {/* Conocimientos */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Conocimientos</h2>
                    <ul className="list-disc list-inside">
                        <li>Lenguajes de programación: C#, C++, Java y Python.</li>
                        <li>Desarrollo web: HTML, CSS y JavaScript.</li>
                        <li>Framework: Angular y React Js.</li>
                        <li>Base de datos: Mysql, PostgresSQL, MariaDB y MongoDB.</li>
                    </ul>
                </div>

                {/* Cursos Realizados */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Cursos Realizados</h2>
                    <ul className="list-disc list-inside">
                        <li>Scrum Foundation Professional SFPC, CertiProf 2023.</li>
                        <li>Foundational C#, FreeCodeCamp 2023.</li>
                        <li>Scrum Fundamentals Certified, SCRUMstudy 2022.</li>
                        <li>Introduction to Cybersecurity, Cisco 2020.</li>
                        <li>Almacenamiento en la Nube con Google Cloud Platform, Plazti 2022.</li>
                        <li>Fundamentos de Bases de Datos, Plazti 2022.</li>
                        <li>Curso Profesional de Python, Plazti 2021.</li>
                        <li>Introducción al Desarrollo Backend, Plazti 2021.</li>
                        <li>Programación Orientada a Objetos: POO, Plazti 2021.</li>
                        <li>Curso Básico de Python, Plazti 2021.</li>
                        <li>Curso Profesional de Git y GitHub, Plazti 2021.</li>
                        <li>Curso Práctico de Python: Creación de un CRUD, Plazti 2021.</li>
                        <li>Complejidad Algorítmica con Python, Plazti 2021.</li>
                        <li>Introducción al Pensamiento Computacional con Python, Plazti 2021.</li>
                        <li>Python Intermedio: Comprehensions, Lambdas y Manejo de Errores, Platzi 2021.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;
