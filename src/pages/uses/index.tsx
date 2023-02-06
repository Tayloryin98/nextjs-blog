import PageHeader from "@/components/PageHeader";
import UsesGallary, { UsesIntl } from "@/components/UsesGallary";
import BaseContainer from "@/layouts/BaseContainer";
import BaseLayout from "@/layouts/BaseLayout";
import { NextPageWithLayout } from "../_app";

const usesList: Array<UsesIntl> = [
  {
    _id: "1",
    category: "Workstation",
    list: [
      {
        name: "16” MacBook Pro, M1 Max, 64GB RAM (2021)",
        summary:
          "I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations.",
      },
      {
        name: "Apple Pro Display XDR (Standard Glass)",
        summary:
          "The only display on the market if you want something HiDPI and bigger than 27”. When you’re working at planetary scale, every pixel you can get counts.",
      },
      {
        name: "IBM Model M SSK Industrial Keyboard",
        summary:
          "They don’t make keyboards the way they used to. I buy these any time I see them go up for sale and keep them in storage in case I need parts or need to retire my main.",
      },
      {
        name: "Apple Magic Trackpad",
        summary:
          "Something about all the gestures makes me feel like a wizard with special powers. I really like feeling like a wizard with special powers.",
      },
      {
        name: "Herman Miller Aeron Chair",
        summary:
          "If I’m going to slouch in the worst ergonomic position imaginable all day, I might as well do it in an expensive chair.",
      },
    ],
  },
  {
    _id: "2",
    category: "Development tools",
    list: [
      {
        name: "Sublime Text 4",
        summary:
          "I don’t care if it’s missing all of the fancy IDE features everyone else relies on, Sublime Text is still the best text editor ever made.",
      },
      {
        name: "iTerm2",
        summary:
          "I’m honestly not even sure what features I get with this that aren’t just part of the macOS Terminal but it’s what I use.",
      },
      {
        name: "TablePlus",
        summary:
          "Great software for working with databases. Has saved me from building about a thousand admin interfaces for my various projects over the years.",
      },
    ],
  },
  {
    _id: "3",
    category: "Design",
    list: [
      {
        name: "Figma",
        summary:
          "We started using Figma as just a design tool but now it’s become our virtual whiteboard for the entire company. Never would have expected the collaboration features to be the real hook.",
      },
    ],
  },
  {
    _id: "4",
    category: "Productivity",
    list: [
      {
        name: "ALfred",
        summary:
          "It’s not the newest kid on the block but it’s still the fastest. The Sublime Text of the application launcher world.",
      },
      {
        name: "Reflect",
        summary:
          "Using a daily notes system instead of trying to keep things organized by topics has been super powerful for me. And with Reflect, it’s still easy for me to keep all of that stuff discoverable by topic even though all of my writing happens in the daily note.",
      },
      {
        name: "SavvyCal",
        summary:
          "Great tool for scheduling meetings while protecting my calendar and making sure I still have lots of time for deep work during the week.",
      },
      {
        name: "Focus",
        summary:
          "Simple tool for blocking distracting websites when I need to just do the work and get some momentum going.",
      },
    ],
  },
];

const pageHeader = {
  title: "Software I use, gadgets I love, and other things I recommend.",
  summary:
    "I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff.",
  maxWidth: true,
};

const UsesPage: NextPageWithLayout = () => {
  return (
    <BaseContainer>
      <PageHeader header={pageHeader}></PageHeader>
      <div className="mt-16 sm:mt-20">
        <div className="space-y-20">
          {usesList.map((item) => {
            return <UsesGallary key={item._id} uses={item}></UsesGallary>;
          })}
        </div>
      </div>
    </BaseContainer>
  );
};

UsesPage.getLayout = function getLayout(page) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default UsesPage;
