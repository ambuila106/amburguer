<template>
  <div class="job">
    <div v-if="isModalServiceActive" class="modal-form">
      <div class="bordered-box">
          <p>Agrega tu servicio:</p>
          <div class="btn btn-link p-0" @click="toggleModalService()">
            cerrar
          </div>

        <div class="input-send">
          <input v-model="newService.description" type="text" placeholder="Descripción">
          <input v-model="newService.number" type="text" placeholder="Número de whatsapp">
          <div class="button" @click="addService()">Enviar</div>
        </div>
      </div>
    </div>

    <div v-if="isModalJobActive" class="modal-form">
      <div class="bordered-box">
          <p>Agrega tu vacante:</p>
          <div class="btn btn-link p-0" @click="toggleModalJob()">
            cerrar
          </div>

        <div class="input-send">
          <input v-model="newJob.description" type="text" placeholder="Descripción">
          <input v-model="newJob.number" type="text" placeholder="Número de whatsapp">
          <div class="button" @click="addJob()">Enviar</div>
        </div>
      </div>
    </div>

    <div v-if="isModalHomeActive" class="modal-form">
      <div class="bordered-box">
          <p>Agrega tu solicitud:</p>
          <div class="btn btn-link p-0" @click="toggleModalHome()">
            cerrar
          </div>

        <div class="input-send">
          <input v-model="newHome.description" type="text" placeholder="Descripción">
          <input v-model="newHome.number" type="text" placeholder="Número de whatsapp">
          <div class="button" @click="addHome()">Enviar</div>
        </div>
      </div>
    </div>

    <template v-if="isRent">
      <h1 class="job-title">HOME</h1>

      <div class="actions">
        <a>
          Solicitudes: {{ homes?.length }}
        </a>

        <div class="btn btn-link ml-1 p-0" @click="toggleModalHome()">
          Agregar
        </div>
      </div>

      <div v-for="home in homes" @click="goToBusiness(home?.number)" :key="home?.description" class="bordered-box">
        {{ home?.description }}

        <template v-if="home?.number">
          <hr>
          <a class="job-number">
            Whatsapp: {{ home.number }}
          </a>
        </template>
      </div>
    </template>

    <template v-if="isJob">
      <h1 class="job-title">JOBS</h1>

      <div class="actions">
        <a>
          Empleos: {{ jobs.length }}
        </a>

        <div class="btn btn-link ml-1 p-0" @click="toggleModalJob()">
          Agregar
        </div>
      </div>

      <div v-for="job in jobs" @click="goToBusiness(job.number)" :key="job?.description" class="bordered-box">
        {{ job?.description }}

        <template v-if="job?.number">
          <hr>
          <a class="job-number">
            Whatsapp: {{ job.number }}
          </a>
        </template>
      </div>
    </template>

    <template v-if="isTool">
      <h1 class="job-title">Tools</h1>

      <div class="actions">
        <a>
          Servicios: {{ services?.length }}
        </a>

        <div class="btn btn-link ml-1 p-0" @click="toggleModalService()">
          Agregar
        </div>
      </div>

      <div v-for="service in services" @click="goToBusiness(service.number)" :key="service?.description" class="bordered-box">
        {{ service?.description }}

        <template v-if="service?.number">
          <hr>
          <a class="job-number">
            Whatsapp: {{ service.number }}
          </a>
        </template>
      </div>
    </template>


    <div class="menu">
      <div @click="showRents()">
        Arriendos
      </div>
      <div @click="showJobs()">
        Trabajos
      </div>
      <div @click="showTools()">
        servicios
      </div>
    </div>
  </div>
</template>

<script>
import app from '@/firebase.js'
import { getDatabase, ref, get, set, onValue } from "firebase/database";

export default {
  name: 'Jobs',
  components: { },
  data() {
    return {
      email: '',
      emails: [],
      db: null,
      showModalSucces:false,
      jobs: [],
      services: [],
      homes: [],
      isModalServiceActive: false,
      isModalJobActive: false,
      isModalHomeActive: false,
      newService: {
        description: '',
        number: ''
      },
      newJob: {
        description: '',
        number: ''
      },
      newHome: {
        description: '',
        number: ''
      },
      isRent: true,
      isJob: false,
      isTool: false,
    }
  },
  async mounted() {
    //const db = firebase.database().ref();
    this.db = getDatabase();
    this.addView()

    const jobsRef = ref(this.db, 'jobs/');

    onValue(jobsRef, (snapshot) => {
      const data = snapshot.val()
      console.log("data: ", data)
      this.jobs = data.reverse().filter(elemento => elemento)
    })

    const servicesRef = ref(this.db, 'services/');

    onValue(servicesRef, (snapshot) => {
      const data = snapshot.val()
      console.log("data: ", data)
      this.services = data.reverse().filter(elemento => elemento)
    })

    const homesRef = ref(this.db, 'homes/');

    onValue(homesRef, (snapshot) => {
      const data = snapshot.val()
      console.log("data: ", data)
      this.homes = data?.reverse().filter(elemento => elemento)
    })

    console.log(getDatabase(app))
  },


  methods: {
    async addView(){
      const listaRef = ref(this.db, 'views'); // Ajusta el nombre de tu lista

        try {
          const snapshot = await get(listaRef);

          const listaActual = snapshot.val();

          if (listaActual) {
            listaActual.push("new view");

            await set(listaRef, listaActual);
          } else {
            await set(listaRef, ["new view"]);
          }

        } catch (error) {
          console.error("Error al agregar la vista", error);
        }
    },

    async addService(){
      const listaRef = ref(this.db, 'services/')

        try {
          const snapshot = await get(listaRef)

          const listaActual = snapshot.val()

          if (listaActual) {
            listaActual.push(this.newService)

            await set(listaRef, listaActual)
          }

        } catch (error) {
          console.error("Error al agregar la vista", error);
        }

        this.toggleModalService()
        this.newService = {
          description: '',
          number: ''
        }
    },

    async addJob(){
      const listaRef = ref(this.db, 'jobs/')

        try {
          const snapshot = await get(listaRef)

          const listaActual = snapshot.val()

          if (listaActual) {
            listaActual.push(this.newJob)

            await set(listaRef, listaActual)
          }

        } catch (error) {
          console.error("Error al agregar la vista", error);
        }

        this.toggleModalJob()
        this.newJob = {
          description: '',
          number: ''
        }
    },

    async addHome(){
      const listaRef = ref(this.db, 'homes/')

        try {
          const snapshot = await get(listaRef)

          const listaActual = snapshot.val()

          if (listaActual) {
            listaActual.push(this.newHome)

            await set(listaRef, listaActual)
          }

        } catch (error) {
          console.error("Error al agregar la vista", error);
        }

        this.toggleModalHome()
        this.newHome = {
          description: '',
          number: ''
        }
    },

    goToBusiness(number){
      if(number) {
        window.location.href = 'https://wa.me/' + "57" + number
      }
    },

    toggleModalService() {
      this.isModalServiceActive = !this.isModalServiceActive
    },

    toggleModalJob() {
      this.isModalJobActive = !this.isModalJobActive
    },

    toggleModalHome() {
      this.isModalHomeActive = !this.isModalHomeActive
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Usar animación de scroll suave
      })
    },

    showRents() {
      this.isRent = true
      this.isJob = false
      this.isTool = false

      this.scrollToTop()
    },

    showJobs() {
      this.isRent = false
      this.isJob = true
      this.isTool = false

      this.scrollToTop()
    },

    showTools() {
      this.isRent = false
      this.isJob = false
      this.isTool = true

      this.scrollToTop()
    }
  },

  watch: {
    showModalSucces() {
      if(this.showModalSucces) {
        setTimeout(() => {
          this.showModalSucces = false;
        }, 2000);
      }
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

.job {
  margin: 0 1.5rem 3.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 1000px;
}

.job-title {
  padding: 2rem 0;
  font-size: 50px;
  letter-spacing: 1rem;
}

.job-subtitle {
  font-size: 20px;
}

.job-number {
  color: #25D366;
  text-decoration: none;
}

.ml-1 {
  margin-left: .5rem;
}

.mt-1 {
  margin-top: .25rem;
}

.button {
  padding: 10px;
  background-color: #c3afff;
  color: black;
  border-radius: 10px;
}

.bordered-box {
  border: 1px solid #fff;
  border-radius: 10px;
  padding: .75rem;
  margin-bottom: 1.5rem;
}

.h-50 {
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.modal-form {
  position: fixed;
  top: 60%;
  background-color: #000516;
  left: 0;
  width: 100%;
  padding: 1.5rem;
}

.menu {
  position: fixed;
  bottom: 0;
  background-color: #000516;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  display: flex;
  justify-content: space-around;
}

.actions {
  display: flex;
  flex-direction: row;
  padding-bottom: 1rem;
  align-items: center;
}

</style>

