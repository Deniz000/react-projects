import { createServer, Model } from "miragejs"

createServer({

    models: {
        projects: Model,
    },
    
    seeds(server) {
        server.create("project", {
          name: "notes",
          imgUrl: "notes.png",
          description: "Bir bileşen oluşturarak React state yönetimi, useEffect ile tarayıcıda kalıcı veri depolama (localStorage), olay dinleme ve CSS modülleri kullanarak özgün stil oluşturma pratiği yaparak React becerilerini geliştirdim."
        });
        server.create("project", {
          name: "login",
          imgUrl: "login_signup.jpeg",
          description: "Bu iki bileşen, kullanıcıların giriş yapabileceği veya kayıt olabileceği temel bir giriş/üyelik sayfası oluşturur. "
        });
      },
      routes() {
        this.namespace = "api";
        this.get("/projects", (schema, request) => {
          return schema.projects.all();
        });

        // this.get("/api/projects", () => {
        //     return {
        //         projects:[
        //             { id:1, name:"Notes App", imgUrl: "/clone_projects/src /images/cl1.png"},
        //         ]
        //     }
        // })

        // this.get("/api/projects/:id", (schema, request) => {
        //     const id = request.params.id
        //     return schema.projects.find(id)
        // })
    },
})