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
        server.create("project", {
          name: "formik_login",
          imgUrl: "formik.png",
          description: "React, Formik ve Yup kullanarak geliştirdiğim bu bileşen, kullanıcı kayıt formunun oluşturulması, veri doğrulaması ve işlenmesi süreçlerini başarıyla yöneterek hem kullanıcı dostu bir deneyim sunuyor hem de güvenilir verilerin kaydedilmesini sağlıyor."
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