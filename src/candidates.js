import React from 'react';
import joebiden from './assets/JoeBiden.png';
import DeanPhillips from './assets/DeanPhillips.jpeg';
import MarianeWilliamson from './assets/MarianeWilliamson.jpeg';
import RyanBrinkley from './assets/RyanBrinkley.jpeg';
import ChrisChriste from './assets/ChrisChriste.jpeg';
import RobertDeSantis from './assets/RobertDeSantis.jpeg';
import NikkiHaley from './assets/NikkiHaley.png';
import DonaldTrump from './assets/DonaldTrump.png';
import RobertKennedy from './assets/RobertFKennedyJr.png';
import VivekRamaswamy from './assets/VivekRamaswamy.jpeg';
import AsaHutchinson from './assets/AsaHutchinson.jpeg';
import Nav from './Nav';


const candidates = [
    {
        id: 1,
        name: 'Joe Biden',
        party: 'Democratic',
        imageSrc: joebiden,
        info: 'Incumbent President, running for re-election. His focus includes defending American democracy, responding to Russia’s invasion of Ukraine, and addressing economic challenges such as inflation and job creation. Biden emphasizes his experience in international diplomacy and crisis management.'
    },
    {
        id: 2,
        name: 'Dean Phillips',
        party: 'Democratic',
        imageSrc: DeanPhillips,
        info: 'U.S. representative from Minnesota, announced his candidacy on October 26, 2023.'
    },
    {
        id: 3,
        name: 'Marianne Williamson',
        party: 'Democratic',
        imageSrc: MarianeWilliamson,
        info: 'Best-selling author and self-help guru, known for her advocacy of progressive policies. Running on a platform centered around "justice and love," Williamson focuses on social and racial justice, climate change, and mental health.'
    },
    {
        id: 4,
        name: 'Ryan Binkley',
        party: 'Republican',
        imageSrc: RyanBrinkley,
        info: 'Businessman and pastor, announced his candidacy on April 23, 2023.'
    },
    {
        id: 5,
        name: 'Chris Christie',
        party: 'Republican',
        imageSrc: ChrisChriste,
        info: 'Former New Jersey governor and federal prosecutor. Christie is a critic of Trump, especially post-Jan. 6 attack. He emphasizes a return to traditional Republican values and governance, focusing on fiscal responsibility and national security.'
    },
    {
        id: 6,
        name: 'Ron DeSantis',
        party: 'Republican',
        imageSrc: RobertDeSantis,
        info: 'Governor of Florida, known for his conservative policies and focus on issues like education reform and pandemic response. DeSantis positions himself as a strong alternative to Trump within the Republican Party, emphasizing state rights and economic growth.'
    },
    {
        id: 7,
        name: 'Nikki Haley',
        party: 'Republican',
        imageSrc: NikkiHaley,
        info: 'Former U.N. Ambassador and South Carolina Governor, announced her candidacy on February 14, 2023.'
    },
    {
        id: 8,
        name: 'Asa Hutchinson',
        party: 'Republican',
        imageSrc: AsaHutchinson,
        info: 'Former Arkansas governor, emphasizing his experience in governance with a focus on economic policies like tax cuts and job creation initiatives. Hutchinson also stresses the importance of party unity and conservative values.'
    },
    {
        id: 9,
        name: 'Vivek Ramaswamy',
        party: 'Republican',
        imageSrc: VivekRamaswamy,
        info: 'Entrepreneur and political commentator, announced his candidacy on February 21, 2023.'
    },
    {
        id: 10,
        name: 'Donald Trump',
        party: 'Republican',
        imageSrc: DonaldTrump,
        info: 'Former President, running for a second, nonconsecutive term. His campaign centers on economic policies, immigration reform, and questioning the legitimacy of the 2020 election results. Trump emphasizes his past record on tax cuts, deregulation, and conservative judicial appointments.'
    }
];



const CandidateRow = ({ candidate }) => (
    <a >
        <div className="flex items-center py-6 px-10">
            <img
                src={candidate.imageSrc}
                alt={candidate.name}
                className="w-24 h-24 rounded-full mr-6 object-cover"
            />

            <div className="flex-grow text-left">
                <h2 className="text-lg font-semibold mb-1">{candidate.name}</h2>
                <h3 className="text-sm font-medium text-gray-500">{candidate.party}</h3> {/* Display the political party */}
                <p className="text-gray-600">{candidate.info}</p>
            </div>
        </div>
    </a>
);

const Candidates = () => (
    <div>
        <Nav />
        <div className="divide-y divide-gray-200">
            {candidates.map(candidate => (
                <CandidateRow key={candidate.id} candidate={candidate} />
            ))}
        </div>
    </div >
);

export default Candidates;
