imp;
// const heading = React.createElement("h1",{id:'heading'},"Hello world from React")
const heading = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {
            id: "heading"
        }, "Hello world from React H1"),
        React.createElement("h2", {
            id: "heading"
        }, "Hello world from React H2")
    ]),
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {
            id: "heading"
        }, "Hello world from React H1"),
        React.createElement("h2", {
            id: "heading"
        }, "Hello world from React H2")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
root.render(heading);

//# sourceMappingURL=index.6bd02f5a.js.map
