import gTTS from 'gtts';
import fs from 'fs';

const text = `Chapter 1: Before the Name Drops Thank God you’re here to join me on this crazy journey! Instead of bingeing on the latest OTT series or chasing Instagram Reels, you picked up a book — mast (awesome) choice! I swear I’m not going to start with a “Once upon a time there was a girl named…” line, pata hai (you know)? Nahin boss (no, boss), that would be mega-filmi (overly dramatic) and totally clichéd. Imagine hearing “Ek thi rani, ek tha raja (there was a queen, there was a king)” right here — so boring. From page one, we’re keeping it real, full masala (spicy fun).
Picture this: a Mumbai monsoon morning. The tin roof of her rented room rattles with raindrops while the chaiwala’s (tea seller’s) kettle whistles frantically below. Auto-rickshaws honk like a dhol (traditional drum), setting the city’s everyday background score. Our heroine stands by the window with an SRK (Shah Rukh Khan) song playing in her earbuds — haan (yes), she loves those dramatic movies. She’s normally shy (blink and you might miss her), but inside, she feels so many emotions it’s like a full Bollywood drama playing in her heart.
Her life is pretty chill on the surface. She’s an introverted bookworm who’d rather sip masala chai (spiced tea) alone than pose for a selfie — achievement unlocked: no photo anxiety, haan (yup)! But trust me, behind those earbuds and soft smiles, there’s a blockbuster in progress. In her head, even ordering extra sugar in tea becomes a dramatic SRK scene, and a traffic jam on the highway automatically turns into a slow-mo dance number. Quietly whispering “fine” to her mirror reflection becomes a victory clap with confetti in her imagination.
Now, don’t get it wrong: this story isn’t about magical makeovers or Insta-romances. It’s got full-on Bollywood masala (spicy drama) written all over it! Drama bigger than Mumbai monsoons, laughs that’ll make you snort your chai (tea), and heartwarming moments straight out. Shah Rukh Khan-level dialogue, you ask? Maybe not out loud yet — but don’t be surprised if she’s practicing them in the mirror, waiting to drop them when the moment’s right. We’re talking blockbusters in book form, boss, delivering dopamine with each page — no fake filters needed.
It’s early morning. The door of her rented room creaks as she steps out. She’s dressed simply: faded blue jeans and a crisp white shirt peeking from under a short jacket, hair loose and a little wild from sleep, earbuds snug in her ears. A trusty canvas bag is slung casually on one shoulder, stuffed with everything she might need (textbooks, a snack, a notebook of musings — you name it). Mumbai greets her with its usual fanfare — an auto rickshaw zips by with a loud beep, a chaiwala (tea vendor) lighting up his stove — and with that, she steps onto the street, ready for action (or at least the day’s first chai (tea)).
And you know what’s the most dreamy, head-in-the-clouds, full filmy (dramatic) fantasy one could have while living in Mumbai?
 Most people would think it’s becoming a hero or heroine, dancing on Marine Drive in the rain, dramatic slow-mo moments, and a viral Instagram reel with 10k likes before lunch. You thought that too, right? Arre (come on) admit it — at some point, you did. But let me burst that bubble gently because our girl isn’t like that. Nope. Not even close.
She’s different. The kind of different that makes you tilt your head and say, “Are you for real?”
 While people around her dreamt of audition calls, starting their own YouTube channels, or doing solo trips to the Himalayas, she had a different fantasy — a job. A simple, solid, honest-to-goodness job in a shiny glass building with central AC, a working coffee machine, and maybe — just maybe — a manager who didn’t reply to emails with ‘let’s connect offline’ when you know they never will.
Yep. That’s it.
 Not a blockbuster, not a viral reel, not even a monsoon romance under a shared umbrella. Just a job.
And after an entire academic life of panic attacks before presentations, overthinking text messages, and secretly practicing ‘Hi, good morning!’ in the mirror 15 times before entering a room — she finally did it. She graduated from a good university, fought her way past anxious mornings and awkward interviews, and landed a job in tech. Not her dream job, not the one where she’d be building Iron Man suits or AI robots with feelings. A regular, 9-to-6, log-in-log-out, boss-calls-you-at-lunch type of job.
You might be thinking — okay, so what? Everyone gets a job. Big deal.
 But hold on, my dopamine-hungry friend. Here’s where you need to understand her wiring.
See, most people — maybe you too — finish a small assignment with half effort and score a decent ‘not bad’ on it. Or prep for a test one night before and somehow scrape through. But her brain isn’t wired that way. She works triple the hours, rewrites the report five times, panics if one line doesn’t sound right, and STILL ends up getting an average “hmm okay” response. It’s like some cosmic inside joke at her expense.
Now before you start calling her ‘psycho’ or overthinking queen — stop.
 Because here’s the thing: her mind is sharp as hell when it doesn’t have to be. At 3 AM, she’ll solve your emotional crisis, recall the plotline of a forgotten TV show from 2017, and know the lyrics to some old indie band nobody listens to anymore. But when it comes to presenting a pitch or making a one-line intro in a Zoom meeting — total blackout.
And I know you might not relate to her right now. That’s okay.
 Not every story needs to be relatable. Some stories are meant to feel like those quiet people in the room you never noticed — until one day, they say something that sticks with you for years.
This is one of those stories.
 And trust me, you’ll be glad you stayed.
`;
const gtts = new gTTS(text, 'en');

gtts.save('chapter1.mp3', function (err, result) {
  if (err) throw new Error(err);
  console.log("✅ MP3 file saved!");
});

