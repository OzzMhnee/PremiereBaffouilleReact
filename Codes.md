# Extraits de code REACT #

## LowerCase, Uppercase, Capitalize 
In the same order
```jsx
{MOT.toLowerCase()} // mot
{mot.toUpperCase()} // MOT
{mot.chatAt(0).toUpperCase() + mot.slide(1)} // Mot
// Pour capitalize une phrase, utlisation de split(' ')
//          foreach mot dans phrase : {mot.chatAt(0).toUpperCase() + mot.slide(1)}
//          join(" ")
```


## React Router Contacts id
```jsx
    import { Outlet, Link, useLoaderData } from "react-router-dom";
    import { getContacts } from "../contacts";

    export default function Root() {
    const { contacts } = useLoaderData();

    return (
        <>
        <div id="sidebar">
            <h1>React Router Contacts</h1>
            <nav>
            {contacts.length ? (
                <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                    <Link to={`contacts/${contact.id}`}>
                        {contact.first || contact.last ? (
                        <>
                            {contact.first} {contact.last}
                        </>
                        ) : ( <i>No Name</i> )}{" "}
                        {contact.favorite && <span>★</span>}
                    </Link>
                    </li>
                ))}
                </ul>
            ) : (
                <p>
                <i>No contacts</i>
                </p>
            )}
            </nav>

            {/* other code */}
        </div>
        </>
    );
    }
```
