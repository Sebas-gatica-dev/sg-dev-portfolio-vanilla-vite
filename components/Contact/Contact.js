export function renderContact() {
  return `
  <div class="mt-6 p-8 bg-gradient-to-b from-black to-gray-800 min-h-1/2 flex flex-col items-center  text-white">
    <h1 class="text-white text-4xl font-extrabold md:text-5xl lg:text-6xl underline underline-offset-3 decoration-8 decoration-indigo-700 ">Ponte en contacto conmigo!</h1>

    <div class="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">

      <div class="rounded-full overflow-hidden w-48 h-48 shadow-lg">
        <img src="../../public/foto-avatar-yo.jpg" alt="Tu foto" class="w-full h-full object-cover">
      </div>

      <div class="text-center md:text-left">
        <p class="text-lg mb-4">
          ¡Hola! Soy [Tu Nombre], un apasionado desarrollador/desarrolladora con experiencia en [área de especialización]. Me encanta resolver problemas complejos y crear soluciones innovadoras.
        </p>
        <p class="text-lg mb-4">
          Si deseas contactarme, puedes encontrarme en:
        </p>
            <div class=" flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2"> 
              <a href="https://www.linkedin.com/in/sebastian-gatica-dev/" target="_blank" rel="noopener noreferrer" class="flex gap-x-2  text-white font-semibold py-2 px-4 rounded-md transition duration-300">
            
              <img src="../../public/linkedin-svgrepo-com.svg" alt="LinkedIn"  class="w-10 h-10 object-cover" />
                
              <h2 class="text-white mt-2 ">Linkedin</h2>
            </a>

            <a href="https://github.com/Sebas-gatica-dev" target="_blank" rel="noopener noreferrer" class="flex gap-x-2  text-white font-semibold py-2 px-4 rounded-md transition duration-300">
            
              <img src="../../public/github-svgrepo-com.svg" alt="GitHub"  class="w-10 h-10 object-cover" />
                
              <h2 class="text-white mt-2 ">Github</h2>
            </a>
        
        </div>
      
      </div>
    </div>
  </div>
  `;
}