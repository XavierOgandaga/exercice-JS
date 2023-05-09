const listContainer=document.querySelector ('#container')
const objetsDeco = [
    {
      nom: "Fauteuil en rotin",
      description: "un fauteuil africain en rotin est un meuble artisanal unique qui allie confort et style africain, et peut être utilisé pour ajouter une touche d'élégance à tout espace intérieur ou extérieur.",
       image:"https://img.freepik.com/photos-premium/fauteuil-rotin-table-vase-fleurs-veranda-bois-afrique-tanzanie-close-up_185094-4764.jpg?w=740"  ,
       auteur: "William Kentridge" ,
       lien: "https://www.jeuneafrique.com/195556/culture/les-mille-et-un-mondes-de-william-kentridge/"  ,
    },
     {
      nom: "Masque Baoulé",
      description: "Masque en bois sculpté à la main, représentant un visage humain ou animal Sculpture en bois traditionnelle de la tribu Baoulé, originaire de Côte d'Ivoire et du Ghana.",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyBjlXmuqCa3LFrJjVfMJkq1rjq2kk9uqdbmEcQDwCp0ORrFSpCDsz3VF8cjUmeIjPENQ&usqp=CAU",
      auteur:"Yinka Shonibare",
      lien: "https://www.jeuneafrique.com/195556/culture/les-mille-et-un-mondes-de-william-kentridge/"
    },
    {
      nom: "Masque Kota",
      description: "Le masque Kota est un type de masque africain en forme de coeur, originaire de la région des Kota au Gabon et au Congo. Il est utilisé dans les rituels funéraires pour honorer les ancêtres et les esprits des défunts.",
      image: "https://www.galerieflak.com/wp-content/uploads/2020/11/kota2.jpg",
      auteur:"Okwui Enwezor",
      lien:"https://www.jeuneafrique.com/mag/250196/culture/la-biennale-de-venise-a-la-mode-postcoloniale/"
    },
    {
      nom: "Sculpture en pierre de Mbigou",
      description: "Sculpture en pierre naturelle de la région de Mbigou, représentant un animal ou une figure humaine.",
      image:"https://cdn.drouot.com/d/image/lot?size=fullHD&path=356/26659/319.jpg",
      auteur: "El anatsui",
      lien:"https://www.jeuneafrique.com/232308/societe/ghana-el-anatsui-raccommoder-le-monde/"
       
    }
  ];

  /*const firebaseConfig = {
    apiKey: "AIzaSyCTrGRbhcIsGUq1Po6Bt22ybNabd2ry53U",
    authDomain: "afrik-art.firebaseapp.com",
    projectId: "afrik-art",
    storageBucket: "afrik-art.appspot.com",
    messagingSenderId: "111714161757",
    appId: "1:111714161757:web:1f1899e6fb9db0ea8869b4",
    measurementId: "G-VRR5YFLG4J"
  };

  firebase.initializeApp(firebaseConfig)

  fetch("https://afrik-art-default-rtdb.europe-west1.firebasedatabase.app")
  .then(data => data.json())
  .then(data => {  console.log(data)
      
  })


  const database = firebase.database()
 

  database.ref("firebase/app")
  .once("value", (snapshot) => { 
  const data = snapshot.val(); 
   
  });

  

 
  console.log(database)


  // Initialiser Firebase

  */
  

  objetsDeco.forEach(objetsDeco=> {listContainer.innerHTML +=

    `<div class="flex justify-center items-center">
    <div class=" max-w-md m-24 hover:scale-125 duration-75	">
        <div class="h-full border-2 border-yellow-950 p-2 rounded-lg overflow-hidden  ">
           
          <img class="lg:h-60 md:h-40 w-screen object-cover object-center  " src="${objetsDeco.image}" alt="blog"></img>
          
          <div class="p-6 ">
            <h1 class="mb-3 textFont font-bold">${objetsDeco.nom}</h1>
            <h2class="leading-relaxed mb-3 textFont"><strong>auteur</strong>: ${objetsDeco.auteur}</h2>
            <p class="leading-relaxed mb-3 textFont"><strong>Descriptions</strong> : ${objetsDeco.description}</p>
            <a  class=" cursor-pointer hover:text-yellow-700 text-white font-bold py-2 px-4 rounded" href=${objetsDeco.lien}>En savoir plus</a>
            <div class="flex items-center flex-wrap">
        </div>
      </div>
      </div> `
    });


