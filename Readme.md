# Server list

Application created to show a list of servers, this application don't use any database we are using a static json file that is generated based on CSV file.

## Technologies used

### Front-end:

- React for UI Library (Create React App).

- Recoil for management state

- Styled Components for styling.

### Back-end:

- KoaJS as server API.

- InversifyJS to handle dependency injection

- csv2json to convert csv to json file

---

## How to run

Both projects are using docker to run applications, the front-end is using NGINX on port 80 and back-end is using port 8000.

Here is the instructions to run this project:

```sh
# Building backend
cd server/
docker build . -t server_app
docker run -d -p <some-port>:8000 server_app

# Building frontend
cd client/
docker build . -t web_app
docker run -d -p <some-port>:80 web_app

```

Make sure you don't have any application running in the same port choose to run your container.

---

## Considerations

- Recoils by default caches async interactions, for that reason was not applied any custom policy.

- Any async interaction is using React Suspense.

- Was created 3 endpoints to filter by **location**, by **server name** and for both, it is possible to select this option in the drop down

- Repository layer for the api project is using Singleton injection, possible to see this configuration in [dependencyInjection.ts](/server/src/loaders/dependencyInjection.ts);

- Was created unit tests only when there are some condition logics function that is working like a proxy, wasn't done.

- For this project was not used any fancy UI library, the layout is minimalist and the server list doesn't have any interaction.
