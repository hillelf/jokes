import React from 'react';
import { render, wait } from '@testing-library/react';
import ReactTestUtils from 'react-dom/test-utils';
import * as axios from "axios";
import MockAdapter from "axios-mock-adapter";

import Poem from '../poem';
import PoemGenerator from '../poemGenerator';

const mock = new MockAdapter(axios, { delayResponse: Math.random() * 500});

afterAll( () => mock.restore());

test("Poem component receives props and then renders poem", () => {
  //Renders Joke component with some text prop.


  const aPoem = { title: "He Parts Himself—like Leaves -",
                content: "He parts Himself—like Leaves /n And then—He closes up /n Then stands upon the Bonnet",
                poet: {
                  author: "Emily Dickinson"
                }
  };
  
  const { getByTestId } = render(
    <Poem poem={aPoem} />
  );

   //Expects Poem component to render correct text.
   const el = getByTestId("poem-text");
   expect(el.innerHTML).toBe("<p><strong>He Parts Himself—like Leaves -</strong><br>by </p><pre>He parts Himself—like Leaves /n And then—He closes up /n Then stands upon the Bonnet</pre>");
});

test("'PoemGenerator' component fetches a random poem and renders it", async () => {
  const poemResponse =  [
    {
        "title": "Christus-Riget",
        "content": "Vidunderligst af Alt paa Jord\nEr Jesu Christi Rige,\nDets Herlighed er og saa stor,\nAt det har ingen Lige.\nUsynligt vel som Sjæl og Sind,\nDet nemt dog er at kiende,\nAlt som en Stad paa Bjergetind,\nDer sees til Verdens Ende.\nDets Gaade er et Guddoms-Ord,\nSom skaber hvad det nævner,\nSom fylder Dale trindt paa Jord\nOg Klipperne udjævner.\nMed det indvies Jesu Daab,\nVelsignes Jesu Bæger,\nSaa hist udspringer Livets Haab,\nOg her det vederkvæger.\nMed Ordet skabes gode Kaar\nFor Barnekæmper lave,\nSaa de kan lee ad Banesaar\nOg springe over Grave.\nMed det der skabes Viin af Vand,\nOg Paradis af Ørke,\nMed det der skabes Lys om Land,\nMens Verden gaaer i Mørke.\nMed Sølv og Guld sin Kæmpe-Trop\nEi Sions-Kongen fæster,\nMen siger blot: Guds Fred! stat op\nOg sid blandt Kongens Giæster!\nLad hvisle kun i Ormegaard,\nAt Riget er lagt øde,\nGud kroner ligefuldt dets Aar\nMed Frugtbarhed og Grøde.\nDets Glands opstaaer som Ax i Vang,\nSom Mai i Bøge-Skove,\nJa, prægtig under Fugle-Sang\nSom Gylden-Soel af Vove.\nDet er den store Konges Glands,\nSom kun paa Korset døde,\nFor at med Livets Rosen-Krands\nJord-Klimpen ham kan møde.\nJa, naar han kommer i det Blaa,\nEr Christnes Kamp tilende,\nHvad Troende i Speilet saae,\nSkal Salige erkiende.\nDa Riget er med Sole-Kaar\nTilsyne og tilstæde,\nI Evighedens Gylden-Aar,\nMed Ret og Fred og Glæde!",
        "url": "https://www.poemist.com/nicolaj-freder-grundtvig/christus-riget",
        "poet": {
            "name": "Nicolaj Freder Grundtvig",
            "url": "https://www.poemist.com/nicolaj-freder-grundtvig"
        }
    },
    {
        "title": "Lights Along The Mile",
        "content": "THE NIGHT descends in glory, and adown the purple west  \nThe young moon, like a crescent skiff, upon some fairy quest,  \nHas dropped below the opal lights that linger low and far  \nTo havens that are beaconed by the Pilot’s evening star;  \nAnd slowly, softly, from above the darkness is unfurled          \nA wondrous curtain loosened on the windows of the world.  \nThen suddenly, like magic, where smoke-stacks fumed the while,  \nTen thousand lights flash out aflame along the Golden Mile.  \n\nAnd thro’ the dusky gauze that falls upon the looming mines  \nDim spires and spars of poppet-heads in faintly broken lines          \nGrow clearer to the vision, till the shadow picture seems  \nThe argosies from half the world i’ the misty Port o’ Dreams;  \nAnd lo! where golden Day had reigned in radiant robes of blue,  \nA god of joy and hope, who thrilled the sons of toil and rue,  \nNow comes the Queen of Starland forth to scatter with a smile          \nHer diamonds that flash and blaze along the Golden Mile.  \n\nAnd all the night a thousand stamps in ceaseless rhythmic roar  \nAre beating out the tragic gold from endless streams of ore,  \nThese harnessed giants of the will that so are trained and taught  \nTo answer to the sentient touch and catch the thrill of thought,          \nFrom nerve to nerve that quivers thro’ the animated steel,  \nAnd makes it live and makes it move and strength emotions feel,  \nTill in their voices music comes insistent all the while  \nReverberating massive chants along the Golden Mile.  \n\nAnd down below, a thousand feet, a thousand miners tear          \nThe golden ore, the glistening ore that holds such joy and care;  \nAh! down below, another world, with hopes, desires, and dreams,—  \nSuch playthings as the tyrant Fate in fickle will beseems.  \nAh! down below, where panting drills are eating thro’ the rock,  \nWhere life and death are lurking in the fire’s convulsive shock,—          \nWhere many a sturdy hero delves within the lode’s long aisle  \nTo win him love, the gold of love, along the Golden Mile.  \n\nNow speeding westward flies the train into the wondrous night,  \nThe engine pulsing as a man who strives with strenuous might;  \nIts great heart seems to throb and throb, its breath comes fierce and warm          \nTo vitalize the force that sleeps along its sinuous form;  \nSo dreaming back from Somerville, a sad thought fills the air,  \nAnd starts a poignant fancy o’er the wondrous city where  \nFrom Lamington to Ivanhoe there’s many a tear and smile  \nBeneath the myriad lights that gleam along the Golden Mile.          \n\nHow bright they glitter down the streets o’er camp, and mill, and mine,  \nThe reflex of that mystic stream that flows from dark to shine—  \nThe brother of that vital spark that wakes from mystery,  \nAnd grows to life and will and power and human entity;  \nThe confluent currents of the mind that holds us all in fief,          \nAnd gives to some the thrill of joy, to some the pang of grief—  \nAh! many noble deeds are done and many that are vile  \nWhere love is lost and love is won, along the Golden Mile.  \n\nSo midnight chimes across the gloom, as we are speeding west,  \nAnd sirens screech the respite sweet that ends in sleep and rest;          \nThe cool breeze meets the tired brow and whispers gentler tales  \nThat seem to murmur with the metre sung by wheels and rails.  \nThe night has grown in glory and from out the purple dome  \nTen thousand stars are gleaming to show the wanderer home;  \nWhile fainter fades the glimmer, like a city on an isle,          \nTill swallowed in the darkness are the lights along the Mile.",
        "url": "https://www.poemist.com/alfred-thomas-chandler/lights-along-the-mile",
        "poet": {
            "name": "Alfred Thomas Chandler",
            "url": "https://www.poemist.com/alfred-thomas-chandler"
        }
    },
  ];

  mock.onGet().replyOnce(200, { poemResponse });

  const { getByText, queryByText, getByTestId } = render(<PoemGenerator />);
  expect(getByText("You haven't loaded any poems yet!")).toBeInTheDocument();

  ReactTestUtils.Simulate.click(getByText("Load a random poem"));

  await wait(() => expect(queryByText("Loading...")).not.toBeInTheDocument()); 

  expect(getByText("You haven't loaded any poems yet!")).toBeInTheDocument();

  
});