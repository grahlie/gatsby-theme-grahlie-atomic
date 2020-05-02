import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, viewport-fit=cover'
        },
        {
          name: 'keywords',
          content: 'A Game Above, A Game Above the Gambling, iGaming Promotions, Sales Promotions, Customer Experiences, Player Experience Platform, Customer Experience Promotions, Players need a story,' +
          'Customer stories, We create stories, Sales story, Stories for Players, Start Celebrating Players, Player Celebration Events, A Player Celebration, Bet & A Burger' +
          '4 Nations Million Kr Challenge, Sunday Million, Win Millions, Millions, Promos, Promotions, Incentives, Champions, Days of the Week, Specials, Player Actions' +
          'Against the Clock, The Player Experience, Product Plus Promotion is the Player Experience, Motivate your marketing, Monetize your marketing, Promo experts, Promo leaders' +
          'Our player experience events provide the game above the gambling, Player experience events, Customer experience platform, Increase Lifetime Value, Decrease CPA' +
          'Decrease cost per acquisition, Reduce churn, Reduce player loss, PLC Gaming, PLC iGaming, PLC Betting, PLC Sportsbook, Sales Incentives' +
          'Casino Champions, Poker Champions, Betting Chapions, Champions of Live Betting, Champions of Blackjack, Champions of Slots, Rush, Hour of the Phoenix' +
          'Gone in 60 Minutes, Player Celebration, Ismail Vali, Steen Madsen, Jakob Famme, Live Events, Gamblling Holiday, Players, Gaming, betting, Sportsbook, Draft Kings' +
          'Fan Duel, Kindred, NetEnt, Betsson, PokerStars, GVC, Flutter, gain and retain players, ARPU, LTV, Acquisition, Retention, Reactivation, Loyalty' +
          'Internet Vikings, Promo Calendar, Player Experience, The Las Vegas Lesson, Never Sell Gambling, The game above, The game above the gambling'
        },
        {
          name: 'google-site-verification',
          content: 'fTEYlfIXvbDpRuxdHujdrLnojRCo4QnetXjbs_81az4'
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
