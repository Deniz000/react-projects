import { createServer, Model } from "miragejs"

createServer({

    models: {
        projects: Model,
    },
    
    seeds(server) {
        server.create("project", {
          name: "Notes App",
          imgUrl: "cl1.png",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        });
        server.create("project", {
          name: "Notes App",
          imgUrl: "cl1.png",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        });
        server.create("project", {
          name: "Notes App",
          imgUrl: "cl1.png",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

        });
        server.create("project", {
          name: "Notes App",
          imgUrl: "cl1.png",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

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