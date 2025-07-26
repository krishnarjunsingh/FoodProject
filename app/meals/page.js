import Link from 'next/link';
import moduleName from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';

export default function MealsPage() {
    return(
        <>
        <header className={moduleName.header}>
            <h1>
                Delicious meals, created {' '}<span className={moduleName.highlight}>by you</span>
                </h1>
             <p>
            Choose you favourite receipe and cook it.
        </p>
        </header>
       
        <p className={moduleName.cta}>
            <Link href="/meals/share">
            Share your favourite receipe
            </Link>
        </p>
        <main className={moduleName.main}>
            <MealsGrid meals={[]}/>
        </main>
        </>
    )
}