const autosTesla = [
    {
      nombre: "Model S",
      imagen: "https://www.tesla.com/sites/default/files/modelsx-new/social/model-s-hero-social.jpg",
      descripcion: "Una berlina de lujo con alto rendimiento y tecnología avanzada."
    },
    {
      nombre: "Model 3",
      imagen: "https://www.tesla.com/sites/default/files/blog_images/model-3-blog-hero.jpg",
      descripcion: "El auto eléctrico más accesible de Tesla."
    },
    {
      nombre: "Model X",
      imagen: "https://www.tesla.com/sites/default/files/modelsx-new/social/model-x-social.jpg",
      descripcion: "SUV con puertas de ala de halcón y gran autonomía."
    },
    {
      nombre: "Model Y",
      imagen: "https://www.tesla.com/sites/default/files/blog_images/model-y-blog-hero.jpg",
      descripcion: "Un SUV compacto con gran espacio y eficiencia."
    }
  ];
  
  const contenedor = document.getElementById('teslaCards');
  
  autosTesla.forEach(auto => {
    contenedor.innerHTML += `
      <div class="col-md-6 col-lg-3 mb-4">
        <div class="card h-100">
          <img src="${auto.imagen}" class="card-img-top" alt="${auto.nombre}">
          <div class="card-body">
            <h5 class="card-title">${auto.nombre}</h5>
            <p class="card-text">${auto.descripcion}</p>
          </div>
        </div>
      </div>
    `;
  });
  