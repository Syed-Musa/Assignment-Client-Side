import { useEffect, useState } from "react";
import CompaniesCard from "./CompaniesCard";

const Companies = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/companies')
        .then(res=> res.json())
        .then(data=> setCompanies(data))
    }, [])

    return (
        <div className="my-10">
            <h2 className="text-5xl font-bold uppercase text-center text-emerald-900 italic">Our best Comapany Trainers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    companies?.map(company => <CompaniesCard key={company.id} company={company}></CompaniesCard>)
                }
            </div>
        </div>
    );
};

export default Companies;