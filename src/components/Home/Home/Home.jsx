// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from 'react';
import ChefDetails from '../ChefDetails/ChefDetails';
import PopularFood from '../PopularFood/PopularFood';
import CustomerReview from '../CustomerReview/CustomerReview';

const Home = () => {
    // eslint-disable-next-line no-unused-vars
    // const data = useLoaderData();

    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://chef-recipe-server-side-iqbalhossainmohon.vercel.app/')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])
    return (
        <>
            <div
                className="bg-cover bg-center h-96 w-full"
                style={{
                    backgroundImage:
                        "url('https://plus.unsplash.com/premium_photo-1661335281435-1d72ba446e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
                }}
            >
                <div className='ml-24 pt-6'>
                    <h1 className='font-extrabold text-5xl text-black'>We Care <span className='text-yellow-400'>About
                        <br />
                        Taste</span> Of Food</h1>
                    <p className='text-white my-8'>You might have eaten Meethi Seviyan, Doodh Wali Seviyan and even Vegetable Vermicelli Pulao, <br /> but have you ever tasted this remix of semiya with South Indian tadka? Semiya Upma is a delicious <br /> dish that can be served for breakfast, lunch and even dinner. It can be prepared in less than 30 minutes <br /> and is a wholesome meal in itself. You just need vermicelli, a handful of veggies and some spices to <br /> make this upma dish. Be it summers or winters, this Semiya Upma can be prepared anytime.</p>
                </div>
            </div>

            <h1 className='text-center font-bold text-5xl text-white my-8'>Chef <span className='text-yellow-400'>Recipe</span></h1>
            <p className='text-center text-white'>When you think about world-renowned chefs, what’s the first name that comes to mind? Is it Ferran Adria? James Beard? Grant Achatz? Mario Batali?</p>

            {
                // eslint-disable-next-line react/jsx-key, no-unused-vars
                data.map(chefData => <ChefDetails
                    key={chefData.id}
                    chefData={chefData}
                />)
            }

            <h1 className='text-center font-bold text-5xl my-4 text-white'>Most <span className='text-yellow-400'>Popular</span> Recipes</h1>
            <p className='text-center text-white'>When you think about world-renowned chefs, what’s the first name that comes to mind? Is it Ferran Adria? James Beard? Grant Achatz? Mario Batali?</p>

            <div>
                <PopularFood/>
            </div>

            <h1 className='text-center font-bold text-5xl my-4 text-white'>Customer <span className='text-yellow-400'>Review</span></h1>
            <p className='text-center text-white'>When you think about world-renowned chefs, what’s the first name that comes to mind? Is it Ferran Adria? James Beard? Grant Achatz? Mario Batali?</p>

            <div>
                <CustomerReview/>
            </div>
        </>
    );
};

export default Home;