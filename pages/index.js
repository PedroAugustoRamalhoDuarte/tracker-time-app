import Head from 'next/head'
import Link from "next/link";

const people = [
    {v: 'car', name: 'bruno'},
    {v: 'bike', name: 'pedro'},
    {v: 'airplane', name: 'mike'},
];
export default function Home() {
    return <div>
        {people.map(e => (
            <div>
                <Link as={`/${e.v}/${e.name}`} href="/[vehicle]/[person]">
                    <a> Navigate to {e.name} {e.v}</a>
                </Link>
            </div>
        ))}
    </div>

}
