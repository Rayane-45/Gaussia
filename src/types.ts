export type Language = 'fr' | 'en';

export interface Translation {
  hero: {
    title: string;
    subtitle: string;
    cta: {
      contact: string;
      services: string;
      project: string;
    };
  };
  services: {
    title: string;
    subtitle: string;
    categories: {
      dataAnalytics: {
        title: string;
        description: string;
        features: string[];
      };
      dataScience: {
        title: string;
        description: string;
        features: string[];
      };
      cloudEngineering: {
        title: string;
        description: string;
        features: string[];
      };
      automation: {
        title: string;
        description: string;
        features: string[];
      };
    };
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      nom:{
        title: string;
        placeHolder: string;
      }
      email: {
        title: string;
        placeHolder: string;
      }
      phone: {
        title: string;
        placeHolder: string;
      }
      msg: {
        title: string;
        placeHolder: string;
      }
    },
    btn: string
  }
}

export const translations: Record<Language, Translation> = {
  fr: {
    hero: {
      title: 'Libérez le potentiel de vos données. Automatisez. Décidez plus vite.',
      subtitle: 'Expert Data & Automatisation pour entreprises ambitieuses.',
      cta: {
        contact: 'Prendre contact',
        // contactLink: 'https://calendar.google.com/calendar/u/7/r?pli=1',
        services: 'Voir les services',
        project: 'Voir un projet'
      }
    },
    services: {
      title: 'Nos Services',
      subtitle: 'Solutions data complètes pour votre transformation digitale',
      categories: {
        dataAnalytics: {
          title: 'Data & Analytics',
          description: 'Transformez vos données en insights actionnables avec des tableaux de bord automatisés et des visualisations impactantes.',
          features: [
            'Data Analytics & BI Reporting automatisé',
            'Dashboards sur-mesure (Power BI / Google Data Studio / Streamlit)',
            'Data visualisation orientée business',
            'Data Quality / Data Cleaning / Structuration des données'
          ]
        },
        dataScience: {
          title: 'Data Science & Machine Learning',
          description: 'Exploitez la puissance du Machine Learning pour prédire, optimiser et automatiser vos processus métier.',
          features: [
            'Modèles prédictifs (Churn, Scoring, Prévisions)',
            'Analyse comportementale des clients',
            'Classification, Régression, NLP',
            'Déploiement de modèles ML en production'
          ]
        },
        cloudEngineering: {
          title: 'Cloud & Data Engineering',
          description: 'Architectures cloud modernes et évolutives pour gérer efficacement vos données à grande échelle.',
          features: [
            'Architecture Data Cloud (Google Cloud, AWS, Azure)',
            'Mise en place de Data Lake / Data Warehouse',
            'Gestion et automatisation des pipelines de données',
            'Collecte et ingestion de données multi-sources'
          ]
        },
        automation: {
          title: 'Automatisation & RPA',
          description: 'Automatisez vos tâches répétitives et libérez du temps pour vous concentrer sur la valeur ajoutée.',
          features: [
            'Automatisation des reportings récurrents',
            'Développement de bots no-code / low-code',
            'Automatisation des processus métiers',
            'RPA pour tâches manuelles chronophages'
          ]
        }
      }
    },
    contact: {
      title: "Entrer en contact",
      subtitle: "Remplis le formulaire ci-dessous pour nous écrire.",
      form: {
        nom:{
          title: "Nom",
          placeHolder: "Votre nom"
        },
        email:{
          title: "Email",
          placeHolder: "votre@email.com"
        },
        phone:{
          title: "Téléphone",
          placeHolder: "+33 6 00 00 00 00"
        },
        msg:{
          title: "Message",
          placeHolder: "Écrivez votre message ici..."
        }
      },
      btn: "Envoyer"
    }
  },
  en: {
    hero: {
      title: 'Unlock the power of your data. Automate. Drive faster decisions.',
      subtitle: 'Data & Automation Expert for fast-growing companies.',
      cta: {
        contact: 'Get in touch',
        services: 'View services',
        project: 'See project'
      }
    },
    services: {
      title: 'Our Services',
      subtitle: 'Complete data solutions for your digital transformation',
      categories: {
        dataAnalytics: {
          title: 'Data & Analytics',
          description: 'Transform your data into actionable insights with automated dashboards and impactful visualizations.',
          features: [
            'Automated Data Analytics & BI Reporting',
            'Custom Dashboards (Power BI / Google Data Studio / Streamlit)',
            'Business-oriented Data Visualization',
            'Data Quality / Data Cleaning / Data Structuring'
          ]
        },
        dataScience: {
          title: 'Data Science & Machine Learning',
          description: 'Harness the power of Machine Learning to predict, optimize and automate your business processes.',
          features: [
            'Predictive Models (Churn, Scoring, Forecasting)',
            'Customer Behavior Analysis',
            'Classification, Regression, NLP',
            'ML Models Deployment to Production'
          ]
        },
        cloudEngineering: {
          title: 'Cloud & Data Engineering',
          description: 'Modern and scalable cloud architectures to efficiently manage your data at scale.',
          features: [
            'Data Cloud Architecture (Google Cloud, AWS, Azure)',
            'Data Lake / Data Warehouse Implementation',
            'Data Pipeline Management and Automation',
            'Multi-source Data Collection and Ingestion'
          ]
        },
        automation: {
          title: 'Automation & RPA',
          description: 'Automate repetitive tasks and free up time to focus on value-added activities.',
          features: [
            'Recurring Reports Automation',
            'No-code / Low-code Bot Development',
            'Business Process Automation',
            'RPA for Time-consuming Manual Tasks'
          ]
        }
      }
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Fill out the form below to write to us.",
      form: {
        nom: {
          title: "Name",
          placeHolder: "Your name"
        },
        email: {
          title: "Email",
          placeHolder: "your@email.com"
        },
        phone: {
          title: "Phone",
          placeHolder: "+1 123 456 7890"
        },
        msg: {
          title: "Message",
          placeHolder: "Write your message here..."
        }
      },
      btn: "Send"
    }

  }
};