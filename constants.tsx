
import { Question, Archetype, BlogArticle, ProjectTemplate } from './types';

export const PROJECT_TEMPLATES: ProjectTemplate[] = [
  {
    id: 'album-release',
    name: 'Album / EP Release',
    description: 'A comprehensive roadmap from tracking to distribution.',
    suggestedMilestones: ['Demo Finalization', 'Studio Tracking', 'Mixing/Mastering', 'Visual Branding', 'Marketing Kickoff']
  },
  {
    id: 'tour-prep',
    name: 'Live Tour Prep',
    description: 'Optimizing your performance for the road.',
    suggestedMilestones: ['Setlist Design', 'Rehearsal Intensive', 'Tech Rig Check', 'Stage Dynamics', 'Logistics Audit']
  },
  {
    id: 'skill-sprint',
    name: '30-Day Technical Sprint',
    description: 'Intensive focus on mastering one specific musical area.',
    suggestedMilestones: ['Weakness Identification', 'Daily Drills', 'Creative Application', 'Peer Review', 'Final Showcase']
  }
];

export const QUESTIONS: Question[] = [
  // Expression vs Structure
  { id: 1, text: "I believe the 'vibe' of a performance is more important than perfect execution.", dimension: 'EXP_STR', invert: false },
  { id: 2, text: "I prefer having a strict setlist rather than jamming freely.", dimension: 'EXP_STR', invert: true },
  { id: 3, text: "Musical rules are meant to be broken to convey a message.", dimension: 'EXP_STR', invert: false },
  { id: 4, text: "I feel most comfortable when every bar of music is planned.", dimension: 'EXP_STR', invert: true },
  { id: 5, text: "Unexpected mistakes can sometimes become the best parts of a song.", dimension: 'EXP_STR', invert: false },
  { id: 31, text: "I find beauty in the imperfections of a raw, unedited recording.", dimension: 'EXP_STR', invert: false },
  { id: 32, text: "I enjoy the process of meticulously quantizing and aligning notes to a grid.", dimension: 'EXP_STR', invert: true },

  // Emotion vs Technique
  { id: 6, text: "I value technical mastery and complex theory in songwriting.", dimension: 'EMO_TEC', invert: true },
  { id: 7, text: "A great song is one that makes the audience feel intense emotion.", dimension: 'EMO_TEC', invert: false },
  { id: 8, text: "I spend hours practicing difficult scales and technical exercises.", dimension: 'EMO_TEC', invert: true },
  { id: 9, text: "I'd rather play a simple melody with heart than a complex solo without soul.", dimension: 'EMO_TEC', invert: false },
  { id: 10, text: "I enjoy dissecting the mathematical relationships in music.", dimension: 'EMO_TEC', invert: true },
  { id: 33, text: "I often prioritize virtuosic playing over simple, accessible parts.", dimension: 'EMO_TEC', invert: true },
  { id: 34, text: "Music is, for me, primarily a way to process my own feelings.", dimension: 'EMO_TEC', invert: false },

  // Spontaneity vs Planning
  { id: 11, text: "I enjoy improvising on the spot during a live show.", dimension: 'SPO_PLA', invert: false },
  { id: 12, text: "I like to have my sessions scheduled with clear goals.", dimension: 'SPO_PLA', invert: true },
  { id: 13, text: "Some of my best musical ideas come from 'happy accidents'.", dimension: 'SPO_PLA', invert: false },
  { id: 14, text: "I create detailed diagrams for my song arrangements.", dimension: 'SPO_PLA', invert: true },
  { id: 15, text: "I prefer to let the song 'write itself' without too much interference.", dimension: 'SPO_PLA', invert: false },
  { id: 35, text: "I always have a backup plan for every technical detail in a live setup.", dimension: 'SPO_PLA', invert: true },
  { id: 36, text: "I rarely know how a song will end when I start writing it.", dimension: 'SPO_PLA', invert: false },

  // Leadership vs Support
  { id: 16, text: "I feel natural taking charge of a rehearsal.", dimension: 'LEA_SUP', invert: false },
  { id: 17, text: "I am happy being a 'background' player as long as it sounds good.", dimension: 'LEA_SUP', invert: true },
  { id: 18, text: "I enjoy being the main speaker on stage.", dimension: 'LEA_SUP', invert: false },
  { id: 19, text: "I prefer following a strong director's vision.", dimension: 'LEA_SUP', invert: true },
  { id: 20, text: "I often find myself making the final decision in creative disputes.", dimension: 'LEA_SUP', invert: false },
  { id: 37, text: "I enjoy the challenge of making others sound their absolute best.", dimension: 'LEA_SUP', invert: true },
  { id: 38, text: "I feel a sense of responsibility to guide the artistic direction of a project.", dimension: 'LEA_SUP', invert: false },

  // Performance vs Creation
  { id: 21, text: "I feel most alive when I'm under the stage lights.", dimension: 'PER_CRE', invert: false },
  { id: 22, text: "I could spend weeks alone in a studio crafting a soundscape.", dimension: 'PER_CRE', invert: true },
  { id: 23, text: "Connecting with an audience is my main motivation.", dimension: 'PER_CRE', invert: false },
  { id: 24, text: "I find the process of writing more fulfilling than touring.", dimension: 'PER_CRE', invert: true },
  { id: 25, text: "I focus more on how a song feels in the moment of playing it than how it will sound on a record.", dimension: 'PER_CRE', invert: false },
  { id: 39, text: "The final recorded product is the most important part of being a musician.", dimension: 'PER_CRE', invert: true },

  // Collaboration vs Independence
  { id: 26, text: "I write my best material when I am completely alone.", dimension: 'COL_IND', invert: true },
  { id: 27, text: "Music is a team sport; I need other people to bounce ideas off.", dimension: 'COL_IND', invert: false },
  { id: 28, text: "I find it difficult to compromise my musical vision for others.", dimension: 'COL_IND', invert: true },
  { id: 29, text: "The synergy of a group is where the magic truly happens.", dimension: 'COL_IND', invert: false },
  { id: 30, text: "I prefer working in a home studio where I have total control.", dimension: 'COL_IND', invert: true },
  { id: 40, text: "I love the unpredictability of a collaborative jam session.", dimension: 'COL_IND', invert: false },
];

export const ARCHETYPES: Archetype[] = [
  {
    id: 'lead-voice',
    name: 'The Lead Voice',
    tagline: 'The Emotional Beacon',
    description: 'Natural performers who thrive on emotional connection. You are the bridge between the music and the audience.',
    strengths: ['Charismatic', 'Intuitive', 'Emotional Phrasing'],
    pitfalls: ['Inconsistent', 'Detail-averse', 'Validation-seeking'],
    idealMatches: ['Rhythm Driver', 'Composer'],
    studioVsLive: 'Stage-focused; feeds off crowd energy.',
    profile: { EXP_STR: 20, EMO_TEC: 15, SPO_PLA: 30, LEA_SUP: 20, PER_CRE: 10, COL_IND: 20 },
    imageUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800',
    color: 'indigo',
    growthPath: {
      practiceAreas: ['Dynamic Control', 'Stage Presence Workshops', 'Emotional Resonance Exercises'],
      recommendedArtists: [
        { name: 'Adele', why: 'Master of emotional vulnerability and phrasing.' },
        { name: 'Freddie Mercury', why: 'Peak charisma and connection with massive crowds.' }
      ],
      mentorsToFollow: ['Renée Fleming', 'Cheryl Porter'],
      suggestedGenres: ['Soul', 'Gospel', 'Rock Opera'],
      roleMilestones: [
        { id: 'lv-1', title: 'Emotional Mapping', description: 'Analyze your setlist for emotional highs and lows.', isCompleted: false, type: 'creative' },
        { id: 'lv-2', title: 'Crowd Work Masterclass', description: 'Practice 3 distinct ways to engage with different audience sizes.', isCompleted: false, type: 'technical' }
      ]
    }
  },
  {
    id: 'rhythm-driver',
    name: 'The Rhythm Driver',
    tagline: 'The Heartbeat',
    description: 'The reliable core that keeps everyone together. You value precision and structure.',
    strengths: ['Timing', 'Consistency', 'Supportive'],
    pitfalls: ['Rigid', 'Risk-averse'],
    idealMatches: ['Lead Voice', 'Visionary'],
    studioVsLive: 'The hero of the live rhythm section.',
    profile: { EXP_STR: 80, EMO_TEC: 70, SPO_PLA: 80, LEA_SUP: 80, PER_CRE: 30, COL_IND: 10 },
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800',
    color: 'emerald',
    growthPath: {
      practiceAreas: ['Metronome Drills', 'Pocket Studies', 'Micro-Timing Awareness'],
      recommendedArtists: [
        { name: 'James Jamerson', why: 'The king of "The Pocket" and melodic bass rhythm.' },
        { name: 'Questlove', why: 'Incredible consistency and leadership from the kit.' }
      ],
      mentorsToFollow: ['Victor Wooten', 'Benny Greb'],
      suggestedGenres: ['Funk', 'Neo-Soul', 'Reggae'],
      roleMilestones: [
        { id: 'rd-1', title: 'The Grid Neutralizer', description: 'Record a groove with 0% quantization that still feels perfectly locked.', isCompleted: false, type: 'technical' },
        { id: 'rd-2', title: 'Dynamic Leading', description: 'Control the band volume solely through your rhythmic intensity.', isCompleted: false, type: 'creative' }
      ]
    }
  },
  {
    id: 'visionary',
    name: 'The Visionary',
    tagline: 'The Conceptual Architect',
    description: 'You see the big picture. You focus on future direction and overall "feeling".',
    strengths: ['Innovative', 'Inspirational', 'Holistic'],
    pitfalls: ['Disconnected', 'Impractical'],
    idealMatches: ['Producer Mind', 'Rhythm Driver'],
    studioVsLive: 'Pre-production master.',
    profile: { EXP_STR: 15, EMO_TEC: 20, SPO_PLA: 20, LEA_SUP: 15, PER_CRE: 70, COL_IND: 30 },
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800',
    color: 'purple',
    growthPath: {
      practiceAreas: ['Conceptual Mapping', 'Mood Boarding', 'Creative Direction'],
      recommendedArtists: [
        { name: 'David Bowie', why: 'Endless reinvention and conceptual depth.' },
        { name: 'Björk', why: 'Bridging technology and organic emotion.' }
      ],
      mentorsToFollow: ['Rick Rubin', 'Brian Eno'],
      suggestedGenres: ['Avant-Garde', 'Experimental Pop', 'Art Rock'],
      roleMilestones: [
        { id: 'v-1', title: 'Sonic Mood Board', description: 'Create a visual and audio collage for your next major project.', isCompleted: false, type: 'creative' },
        { id: 'v-2', title: 'Brand Synthesis', description: 'Define your musical project in exactly three non-musical words.', isCompleted: false, type: 'business' }
      ]
    }
  },
  {
    id: 'producer-mind',
    name: 'The Producer Mind',
    tagline: 'The Master of Detail',
    description: 'Obsessed with texture, layers, and technical perfection in recording.',
    strengths: ['Technically Proficient', 'Problem Solver', 'Detail-oriented'],
    pitfalls: ['Perfectionist', 'Over-prepares'],
    idealMatches: ['Visionary', 'Melody Maker'],
    studioVsLive: 'God-tier in studio.',
    profile: { EXP_STR: 75, EMO_TEC: 80, SPO_PLA: 85, LEA_SUP: 60, PER_CRE: 90, COL_IND: 80 },
    imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800',
    color: 'blue',
    growthPath: {
      practiceAreas: ['Signal Flow Mastery', 'Critical Listening', 'Workflow Optimization'],
      recommendedArtists: [
        { name: 'Quincy Jones', why: 'The ultimate synthesis of arrangement and technology.' },
        { name: 'Kevin Parker', why: 'Mastery of sonic identity and DIY production.' }
      ],
      mentorsToFollow: ['Andrew Scheps', 'Sylvia Massy'],
      suggestedGenres: ['Electronic', 'Modern Pop', 'Psych-Rock'],
      roleMilestones: [
        { id: 'pm-1', title: 'Workflow Audit', description: 'Reduce your time from idea to rough mix by 50%.', isCompleted: false, type: 'technical' },
        { id: 'pm-2', title: 'Organic Layering', description: 'Incorporate 3 non-musical textures into a professional arrangement.', isCompleted: false, type: 'creative' }
      ]
    }
  },
  {
    id: 'harmony-architect',
    name: 'The Harmony Architect',
    tagline: 'The Layer Specialist',
    description: 'You find the notes in between. You provide depth and richness to arrangements.',
    strengths: ['Theoretical Knowledge', 'Collaborative', 'Subtle'],
    pitfalls: ['Over-complicates', 'Low Visibility'],
    idealMatches: ['Melody Maker', 'Lead Voice'],
    studioVsLive: 'Secret weapon of vocal stacks.',
    profile: { EXP_STR: 60, EMO_TEC: 65, SPO_PLA: 70, LEA_SUP: 85, PER_CRE: 80, COL_IND: 15 },
    imageUrl: 'https://images.unsplash.com/photo-1514320296825-2ee1d4809d41?auto=format&fit=crop&q=80&w=800',
    color: 'rose',
    growthPath: {
      practiceAreas: ['Chord Substitution', 'Vocal Stacking', 'Interval Training'],
      recommendedArtists: [
        { name: 'Jacob Collier', why: 'Infinite understanding of harmonic space.' },
        { name: 'The Beach Boys', why: 'Foundation of modern vocal harmony.' }
      ],
      mentorsToFollow: ['Mark Kibble', 'Take 6'],
      suggestedGenres: ['Jazz', 'A Cappella', 'Chamber Pop'],
      roleMilestones: [
        { id: 'ha-1', title: 'Micro-Tonal Exploration', description: 'Experiment with non-traditional intervals in a 4-part harmony.', isCompleted: false, type: 'technical' },
        { id: 'ha-2', title: 'Subtlety Master', description: 'Write an arrangement where the harmony is felt but not noticed.', isCompleted: false, type: 'creative' }
      ]
    }
  },
  {
    id: 'musical-director',
    name: 'The Musical Director',
    tagline: 'The Bridge',
    description: 'Translates creative vision into practical instruction for the band.',
    strengths: ['Communication', 'Organization', 'Diverse skills'],
    pitfalls: ['Overbearing', 'Efficiency over Creativity'],
    idealMatches: ['Visionary', 'Lead Voice'],
    studioVsLive: 'Essential for large ensembles.',
    profile: { EXP_STR: 50, EMO_TEC: 40, SPO_PLA: 90, LEA_SUP: 10, PER_CRE: 40, COL_IND: 10 },
    imageUrl: 'https://images.unsplash.com/photo-1517230805983-748439746bb9?auto=format&fit=crop&q=80&w=800',
    color: 'cyan',
    growthPath: {
      practiceAreas: ['Ensemble Management', 'Chart Writing', 'Rehearsal Psychology'],
      recommendedArtists: [
        { name: 'Prince', why: 'Unparalleled command over a live ensemble.' },
        { name: 'Cory Wong', why: 'Master of band dynamics and rhythmic leadership.' }
      ],
      mentorsToFollow: ['Adam Blackstone', 'Ricky Minor'],
      suggestedGenres: ['Big Band', 'Touring Pop', 'Musical Theatre'],
      roleMilestones: [
        { id: 'md-1', title: 'The Master Chart', description: 'Create a hybrid chart that works for both jazz and pop players.', isCompleted: false, type: 'technical' },
        { id: 'md-2', title: 'Efficient Prep', description: 'Conduct a 4-hour rehearsal in 2 hours with no loss in quality.', isCompleted: false, type: 'business' }
      ]
    }
  },
  {
    id: 'songwriter-lyricist',
    name: 'The Songwriter',
    tagline: 'The Truth Seeker',
    description: 'Introspective storyteller who values authentic messaging above all.',
    strengths: ['Authentic', 'Poetic', 'Conceptual'],
    pitfalls: ['Protective of ideas', 'Groove-blind'],
    idealMatches: ['Producer Mind', 'Melody Maker'],
    studioVsLive: 'Master of the blank page.',
    profile: { EXP_STR: 10, EMO_TEC: 25, SPO_PLA: 50, LEA_SUP: 50, PER_CRE: 85, COL_IND: 90 },
    imageUrl: 'https://images.unsplash.com/photo-1507838596058-a96a2ecda131?auto=format&fit=crop&q=80&w=800',
    color: 'orange',
    growthPath: {
      practiceAreas: ['Metaphor Mapping', 'Narrative Pacing', 'Rhyme Scheme Innovation'],
      recommendedArtists: [
        { name: 'Joni Mitchell', why: 'The pinnacle of poetic songwriting.' },
        { name: 'Leonard Cohen', why: 'Master of economy and weight in words.' }
      ],
      mentorsToFollow: ['Pat Pattison', 'Alicia Keys'],
      suggestedGenres: ['Folk', 'Indie', 'Alternative R&B'],
      roleMilestones: [
        { id: 'sw-1', title: 'The Economy of Words', description: 'Rewrite a 5-minute song into 3 minutes without losing meaning.', isCompleted: false, type: 'creative' },
        { id: 'sw-2', title: 'Vulnerable Draft', description: 'Write a song about a topic you have previously been too afraid to approach.', isCompleted: false, type: 'creative' }
      ]
    }
  },
  {
    id: 'melody-maker',
    name: 'The Melody Maker',
    tagline: 'The Hook Specialist',
    description: 'You have a natural gift for infectious lines. You focus on the melodic "what" more than the technical "how".',
    strengths: ['Melodic Intuition', 'Simplicity', 'Hooks'],
    pitfalls: ['Bored with detail', 'Over-relies on talent'],
    idealMatches: ['Harmony Architect', 'Producer Mind'],
    studioVsLive: 'Vibrant in writing and lead melodic roles.',
    profile: { EXP_STR: 30, EMO_TEC: 30, SPO_PLA: 40, LEA_SUP: 40, PER_CRE: 60, COL_IND: 40 },
    imageUrl: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=800',
    color: 'amber',
    growthPath: {
      practiceAreas: ['Melodic Variation', 'Hook Development', 'Thematic Consistency'],
      recommendedArtists: [
        { name: 'Paul McCartney', why: 'The greatest melodicist in pop history.' },
        { name: 'Max Martin', why: 'Master of melodic math and hook placement.' }
      ],
      mentorsToFollow: ['Max Martin', 'Benny Blanco'],
      suggestedGenres: ['Pop', 'R&B', 'Synthwave'],
      roleMilestones: [
        { id: 'mm-1', title: 'The whistle test', description: 'Write 5 melodies that a non-musician can hum after one listen.', isCompleted: false, type: 'creative' },
        { id: 'mm-2', title: 'Motivic Development', description: 'Build an entire 4-minute instrumental from a 3-note motif.', isCompleted: false, type: 'technical' }
      ]
    }
  },
  {
    id: 'composer-arranger',
    name: 'The Composer',
    tagline: 'The Formal Architect',
    description: 'You craft complex structures and formal movements. You value high technique and creation over performance.',
    strengths: ['Complexity', 'Thematic Development', 'Technical Depth'],
    pitfalls: ['Inaccessible', 'Over-intellectualizes'],
    idealMatches: ['Lead Voice', 'Musical Director'],
    studioVsLive: 'Thrives in pre-production and scoring.',
    profile: { EXP_STR: 90, EMO_TEC: 85, SPO_PLA: 90, LEA_SUP: 50, PER_CRE: 90, COL_IND: 70 },
    imageUrl: 'https://images.unsplash.com/photo-1465821508027-582c46f3c393?auto=format&fit=crop&q=80&w=800',
    color: 'violet',
    growthPath: {
      practiceAreas: ['Counterpoint', 'Orchestration', 'Large Scale Form'],
      recommendedArtists: [
        { name: 'Igor Stravinsky', why: 'Pushed the boundaries of rhythm and form.' },
        { name: 'Hans Zimmer', why: 'Master of modern cinematic arrangement.' }
      ],
      mentorsToFollow: ['Samuel Adler', 'Guy Michelmore'],
      suggestedGenres: ['Classical', 'Cinematic', 'Prog Rock'],
      roleMilestones: [
        { id: 'ca-1', title: 'Hybrid Scoring', description: 'Write a piece that blends orchestral elements with 808-based rhythms.', isCompleted: false, type: 'technical' },
        { id: 'ca-2', title: 'Emotional Curve', description: 'Map a 10-minute composition to a specific psychological journey.', isCompleted: false, type: 'creative' }
      ]
    }
  },
  {
    id: 'instrumental-backbone',
    name: 'The Backbone',
    tagline: 'The Silent Hero',
    description: 'Highly technical and supportive. You are the glue that ensures everything sounds professional.',
    strengths: ['Technical Support', 'Reliability', 'Precision'],
    pitfalls: ['Invisible', 'Neglects own creativity'],
    idealMatches: ['Lead Voice', 'Melody Maker'],
    studioVsLive: 'Essential in every professional setting.',
    profile: { EXP_STR: 70, EMO_TEC: 90, SPO_PLA: 70, LEA_SUP: 90, PER_CRE: 50, COL_IND: 20 },
    imageUrl: 'https://images.unsplash.com/photo-1514320296825-2ee1d4809d41?auto=format&fit=crop&q=80&w=800',
    color: 'teal',
    growthPath: {
      practiceAreas: ['Tone Sculpting', 'Adaptive Playing', 'Session Etiquette'],
      recommendedArtists: [
        { name: 'Leland Sklar', why: 'The ultimate session legend and supportive bassist.' },
        { name: 'Pino Palladino', why: 'Unparalleled feel and supportive placement.' }
      ],
      mentorsToFollow: ['Rick Beato', 'Produce Like A Pro'],
      suggestedGenres: ['Session Work', 'Blues', 'Classic Rock'],
      roleMilestones: [
        { id: 'ib-1', title: 'The Sonic Chameleon', description: 'Record three takes of the same song in three distinct historical tones.', isCompleted: false, type: 'technical' },
        { id: 'ib-2', title: 'Minimalist Mastery', description: 'Play a full set where you never play more than 2 notes per bar, yet anchor the groove.', isCompleted: false, type: 'creative' }
      ]
    }
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'rehearsal-tension',
    title: 'How to Manage Rehearsal Tension',
    excerpt: 'Role clarity is the key to minimizing conflict. Learn how identifying archetypes can save your band from imploding.',
    content: `
      <h2>The Anatomy of Creative Conflict</h2>
      <p>In every high-stakes rehearsal, tension is inevitable. But most musicians mistake personality clashes for something far more structural: <strong>role ambiguity</strong>. When two "Lead Voices" are competing for the same emotional space, or a "Rhythm Driver" feels their authority over the tempo is being undermined, the result isn't just bad music—it's a broken relationship.</p>
      
      <h3>1. Establish the 'Maestro' for the Day</h3>
      <p>Egos often clash when leadership isn't defined. Even in democratic bands, rotate who holds the 'final say' for specific sections. Let your Musical Director handle technical flow, while the Visionary handles the vibe. By pre-defining who has the "conch," you eliminate 90% of mid-song arguments.</p>
      
      <blockquote>"The best bands aren't the ones with the best players; they are the ones with the clearest boundaries."</blockquote>

      <h3>2. The Five-Minute Cool Down</h3>
      <p>When tension spikes, our creative brains shut down and our defensive 'reptile' brains take over. Implement a mandatory 5-minute silent break when a debate lasts longer than three minutes. Do not talk about the song. Do not touch your instruments. Re-engage only when heart rates have dropped.</p>
      
      <h3>3. Use the Language of Archetypes</h3>
      <p>Instead of saying "You're playing too much," try "As the Rhythm Driver here, can you help us anchor the core so the Melody Maker can breathe?" This shifts the focus from personal criticism to structural contribution. It validates their role while requesting a specific adjustment.</p>
    `,
    category: 'groups',
    date: '2024-05-20',
    imageUrl: 'https://images.unsplash.com/photo-1514525253344-a812da969d64?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'studio-psychology',
    title: 'The Psychology of the Studio',
    excerpt: 'Why "Producer Minds" struggle with "Lead Voices" and how to bridge the tactical gap during tracking.',
    content: `
      <h2>The Tracking Room Divide</h2>
      <p>The recording studio is a pressure cooker for creativity. On one side of the glass, you have the artist—vulnerable, emotional, and living in the moment. On the other, the producer—analytical, technical, and thinking about the final mix. This friction is where great records are made, but only if it's managed correctly.</p>

      <h3>Managing the Vibe vs. The Tech</h3>
      <p>For a Producer Mind, it's easy to get lost in signal chains and sample rates. But for a Lead Voice, nothing kills a performance faster than waiting 20 minutes for a mic swap. Successful tracking sessions prioritize <em>momentum</em> over perfection. A 'good enough' signal with a 'god-tier' performance always beats the opposite.</p>

      <h3>The Feedback Loop</h3>
      <p>Avoid giving technical feedback to emotional performers during a take. Instead of "Your pitch was flat on the second verse," try "That second verse felt a bit heavy—can we try one that feels more like a secret?" Translate technical needs into emotional metaphors.</p>

      <h3>Phase-Awareness</h3>
      <p>Understand which phase of production you are in. Pre-production is for the Visionaries. Tracking is for the Performers. Post-production is for the Producer Mind. Respecting these boundaries ensures that everyone feels their expertise is being utilized at the right time.</p>
    `,
    category: 'productivity',
    date: '2024-05-18',
    imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'vocal-health',
    title: 'Vocal Health for the Modern Singer',
    excerpt: 'Beyond the warm-up: holistic and biological approaches to maintaining your instrument on long tours.',
    content: `
      <h2>The Instrument You Can't Replace</h2>
      <p>Unlike a guitarist who can swap a string, a vocalist is stuck with their biology. For the Lead Voice or Harmony Architect, your vocal folds are your livelihood. Maintaining them requires more than just a 10-minute siren before you hit the stage.</p>

      <h3>Hydration is a 24-Hour Job</h3>
      <p>The water you drink right before a show does almost nothing for your vocal folds. It takes 4-6 hours for systemic hydration to reach the laryngeal mucosa. To be ready for an 8 PM set, your hydration journey starts at 8 AM. Aim for consistency, not volume.</p>

      <h3>The Silent Night</h3>
      <p>Vocal rest is not a myth. On tour, implement 'Silent Mornings'—no talking until 12 PM. This allows the micro-trauma from the previous night's performance to heal. Use a humidifier in your hotel room to prevent the dry air from stripping your natural protective mucus.</p>

      <h3>Biological Support</h3>
      <ul>
        <li><strong>Steam:</strong> Direct topical hydration. 5 minutes of steaming is worth an hour of rest.</li>
        <li><strong>Anti-Inflammatory Diet:</strong> Avoid high-acid foods that trigger reflux, which can literally burn your vocal folds while you sleep.</li>
        <li><strong>Sleep:</strong> The only time your body truly repairs tissue. 8 hours is non-negotiable for touring vocalists.</li>
      </ul>
    `,
    category: 'vocal',
    date: '2024-05-15',
    imageUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1200'
  }
];
