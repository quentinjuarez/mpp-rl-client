import type { AxiosInstance } from 'axios'

class PandaScoreService {
  client: AxiosInstance

  constructor(client: AxiosInstance) {
    this.client = client
  }

  async serie(serieId: number) {
    const res = await this.client.get<PSSerie>('/series', {
      params: {
        id: [serieId]
      }
    })

    return res.data
  }

  async teams() {
    const res = await this.client.get('/teams')

    return res.data
  }

  async pastMatches(serieId: number) {
    const res = await this.client.get<{
      matches: PSMatch[]
    }>('/matches/past', {
      params: {
        serie_id: serieId
      }
    })

    return res.data
  }

  async upcomingMatches(serieId: number) {
    // const res = await this.client.get<{ matches: PSMatch[] }>('/matches/upcoming', {
    //   params: {
    //     serie_id: serieId
    //   }
    // })

    // return res.data
    return {
      matches: [
        {
          match_type: 'best_of',
          serie_id: 7907,
          winner_id: null,
          status: 'not_started',
          begin_at: '2024-09-10T16:00:00Z',
          rescheduled: false,
          slug: 'g2-stride-vs-limitless-2024-09-10',
          id: 1032246,
          serie: {
            begin_at: '2024-09-10T16:00:00Z',
            end_at: '2024-09-16T01:00:00Z',
            full_name: '2024',
            id: 7907,
            league_id: 4834,
            modified_at: '2024-08-30T08:26:14Z',
            name: '',
            season: null,
            slug: 'rl-rlcs-world-championship-2024',
            winner_id: null,
            winner_type: 'Team',
            year: 2024
          },
          name: 'Round 1: G2S vs LIMIT',
          detailed_stats: true,
          modified_at: '2024-08-30T08:26:14Z',
          game_advantage: null,
          number_of_games: 5,
          tournament: {
            begin_at: '2024-09-10T16:00:00Z',
            detailed_stats: true,
            end_at: '2024-09-13T02:00:00Z',
            has_bracket: false,
            id: 14455,
            league_id: 4834,
            live_supported: false,
            modified_at: '2024-08-30T08:26:14Z',
            name: 'Swiss Stage',
            prizepool: null,
            serie_id: 7907,
            slug: 'rl-rlcs-world-championship-2024-swiss-stage',
            tier: 's',
            winner_id: null,
            winner_type: 'Team'
          },
          forfeit: false,
          end_at: null,
          draw: false,
          results: [
            {
              score: 0,
              team_id: 134435
            },
            {
              score: 0,
              team_id: 133444
            }
          ],
          games: [
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31536,
              length: null,
              match_id: 1032246,
              position: 1,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            },
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31537,
              length: null,
              match_id: 1032246,
              position: 2,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            },
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31538,
              length: null,
              match_id: 1032246,
              position: 3,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            },
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31539,
              length: null,
              match_id: 1032246,
              position: 4,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            },
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31540,
              length: null,
              match_id: 1032246,
              position: 5,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            }
          ],
          opponents: [
            {
              opponent: {
                acronym: 'G2S',
                id: 134435,
                image_url:
                  'https://cdn.pandascore.co/images/team/image/134435/g2_esportslogo_square.png',
                location: 'US',
                modified_at: '2024-08-30T08:10:02Z',
                name: 'G2 Stride',
                slug: 'g2-stride'
              },
              type: 'Team'
            },
            {
              opponent: {
                acronym: 'LIMIT',
                id: 133444,
                image_url:
                  'https://cdn.pandascore.co/images/team/image/133444/190px_limitless_allmode.png',
                location: 'US',
                modified_at: '2024-08-30T08:10:07Z',
                name: 'Limitless',
                slug: 'limitless-rl'
              },
              type: 'Team'
            }
          ],
          scheduled_at: '2024-09-10T16:00:00Z',
          league_id: 4834,
          winner: null,
          original_scheduled_at: '2024-09-10T16:00:00Z',
          winner_type: 'Team',
          tournament_id: 14455
        },
        {
          match_type: 'best_of',
          serie_id: 7907,
          winner_id: null,
          status: 'not_started',
          begin_at: '2024-09-10T17:00:00Z',
          rescheduled: false,
          slug: 'team-falcons-vs-gaimin-gladiators-2024-09-10',
          id: 1032247,
          serie: {
            begin_at: '2024-09-10T16:00:00Z',
            end_at: '2024-09-16T01:00:00Z',
            full_name: '2024',
            id: 7907,
            league_id: 4834,
            modified_at: '2024-08-30T08:26:14Z',
            name: '',
            season: null,
            slug: 'rl-rlcs-world-championship-2024',
            winner_id: null,
            winner_type: 'Team',
            year: 2024
          },
          name: 'Round 1: FLCN vs GLA',
          detailed_stats: true,
          modified_at: '2024-08-30T08:26:14Z',
          game_advantage: null,
          number_of_games: 5,
          tournament: {
            begin_at: '2024-09-10T16:00:00Z',
            detailed_stats: true,
            end_at: '2024-09-13T02:00:00Z',
            has_bracket: false,
            id: 14455,
            league_id: 4834,
            live_supported: false,
            modified_at: '2024-08-30T08:26:14Z',
            name: 'Swiss Stage',
            prizepool: null,
            serie_id: 7907,
            slug: 'rl-rlcs-world-championship-2024-swiss-stage',
            tier: 's',
            winner_id: null,
            winner_type: 'Team'
          },
          forfeit: false,
          end_at: null,
          draw: false,
          results: [
            {
              score: 0,
              team_id: 131231
            },
            {
              score: 0,
              team_id: 131230
            }
          ],
          games: [
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31541,
              length: null,
              match_id: 1032247,
              position: 1,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            },
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31542,
              length: null,
              match_id: 1032247,
              position: 2,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            },
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31543,
              length: null,
              match_id: 1032247,
              position: 3,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            },
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31544,
              length: null,
              match_id: 1032247,
              position: 4,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            },
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31545,
              length: null,
              match_id: 1032247,
              position: 5,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            }
          ],
          opponents: [
            {
              opponent: {
                acronym: 'FLCN',
                id: 131231,
                image_url:
                  'https://cdn.pandascore.co/images/team/image/131231/team_falconslogo_square.png',
                location: 'SA',
                modified_at: '2024-08-30T08:10:06Z',
                name: 'Team Falcons',
                slug: 'team-falcons-rl'
              },
              type: 'Team'
            },
            {
              opponent: {
                acronym: 'GLA',
                id: 131230,
                image_url:
                  'https://cdn.pandascore.co/images/team/image/131230/gladiators_2022_allmode.png',
                location: '',
                modified_at: '2024-08-30T08:10:07Z',
                name: 'Gaimin Gladiators',
                slug: 'gaimin-gladiators-rl'
              },
              type: 'Team'
            }
          ],
          scheduled_at: '2024-09-10T17:00:00Z',
          league_id: 4834,
          winner: null,
          original_scheduled_at: '2024-09-10T17:00:00Z',
          winner_type: 'Team',
          tournament_id: 14455
        },
        {
          match_type: 'best_of',
          serie_id: 7907,
          winner_id: null,
          status: 'not_started',
          begin_at: '2024-09-10T18:00:00Z',
          rescheduled: true,
          slug: 'gentle-mates-alpine-vs-kansas-city-pioneers-2024-09-10',
          id: 1032250,
          serie: {
            begin_at: '2024-09-10T16:00:00Z',
            end_at: '2024-09-16T01:00:00Z',
            full_name: '2024',
            id: 7907,
            league_id: 4834,
            modified_at: '2024-08-30T08:26:14Z',
            name: '',
            season: null,
            slug: 'rl-rlcs-world-championship-2024',
            winner_id: null,
            winner_type: 'Team',
            year: 2024
          },
          name: 'M8 vs KCP',
          detailed_stats: true,
          modified_at: '2024-09-07T00:38:27Z',
          game_advantage: null,
          number_of_games: 5,
          tournament: {
            begin_at: '2024-09-10T16:00:00Z',
            detailed_stats: true,
            end_at: '2024-09-13T02:00:00Z',
            has_bracket: false,
            id: 14455,
            league_id: 4834,
            live_supported: false,
            modified_at: '2024-08-30T08:26:14Z',
            name: 'Swiss Stage',
            prizepool: null,
            serie_id: 7907,
            slug: 'rl-rlcs-world-championship-2024-swiss-stage',
            tier: 's',
            winner_id: null,
            winner_type: 'Team'
          },
          forfeit: false,
          end_at: null,
          draw: false,
          results: [
            {
              score: 0,
              team_id: 134452
            },
            {
              score: 0,
              team_id: 127699
            }
          ],
          games: [
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31556,
              length: null,
              match_id: 1032250,
              position: 1,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            },
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31557,
              length: null,
              match_id: 1032250,
              position: 2,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            },
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31558,
              length: null,
              match_id: 1032250,
              position: 3,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            },
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31559,
              length: null,
              match_id: 1032250,
              position: 4,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            },
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31560,
              length: null,
              match_id: 1032250,
              position: 5,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            }
          ],
          opponents: [
            {
              opponent: {
                acronym: 'M8',
                id: 134452,
                image_url:
                  'https://cdn.pandascore.co/images/team/image/134452/gentle_mates_alpine_2024_lightmode.png',
                location: 'FR',
                modified_at: '2024-08-30T08:10:00Z',
                name: 'Gentle Mates Alpine',
                slug: 'gentle-mates-alpine'
              },
              type: 'Team'
            },
            {
              opponent: {
                acronym: 'KCP',
                id: 127699,
                image_url:
                  'https://cdn.pandascore.co/images/team/image/127699/kansas_city_pioneers_2020.png',
                location: 'US',
                modified_at: '2024-08-30T08:10:05Z',
                name: 'Kansas City Pioneers',
                slug: 'kansas-city-pioneers'
              },
              type: 'Team'
            }
          ],
          scheduled_at: '2024-09-10T18:00:00Z',
          league_id: 4834,
          winner: null,
          original_scheduled_at: '2024-09-10T20:00:00Z',
          winner_type: 'Team',
          tournament_id: 14455
        },
        {
          match_type: 'best_of',
          serie_id: 7907,
          winner_id: null,
          status: 'not_started',
          begin_at: '2024-09-10T19:00:00Z',
          rescheduled: true,
          slug: 'vitality-vs-team-secret-2024-09-10',
          id: 1032251,
          serie: {
            begin_at: '2024-09-10T16:00:00Z',
            end_at: '2024-09-16T01:00:00Z',
            full_name: '2024',
            id: 7907,
            league_id: 4834,
            modified_at: '2024-08-30T08:26:14Z',
            name: '',
            season: null,
            slug: 'rl-rlcs-world-championship-2024',
            winner_id: null,
            winner_type: 'Team',
            year: 2024
          },
          name: 'VIT vs TS',
          detailed_stats: true,
          modified_at: '2024-09-07T00:38:49Z',
          game_advantage: null,
          number_of_games: 5,
          tournament: {
            begin_at: '2024-09-10T16:00:00Z',
            detailed_stats: true,
            end_at: '2024-09-13T02:00:00Z',
            has_bracket: false,
            id: 14455,
            league_id: 4834,
            live_supported: false,
            modified_at: '2024-08-30T08:26:14Z',
            name: 'Swiss Stage',
            prizepool: null,
            serie_id: 7907,
            slug: 'rl-rlcs-world-championship-2024-swiss-stage',
            tier: 's',
            winner_id: null,
            winner_type: 'Team'
          },
          forfeit: false,
          end_at: null,
          draw: false,
          results: [
            {
              score: 0,
              team_id: 129919
            },
            {
              score: 0,
              team_id: 130656
            }
          ],
          games: [
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31561,
              length: null,
              match_id: 1032251,
              position: 1,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            },
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31562,
              length: null,
              match_id: 1032251,
              position: 2,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            },
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31563,
              length: null,
              match_id: 1032251,
              position: 3,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            },
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31564,
              length: null,
              match_id: 1032251,
              position: 4,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            },
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31565,
              length: null,
              match_id: 1032251,
              position: 5,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            }
          ],
          opponents: [
            {
              opponent: {
                acronym: 'VIT',
                id: 129919,
                image_url:
                  'https://cdn.pandascore.co/images/team/image/129919/team_vitalitylogo_square.png',
                location: 'FR',
                modified_at: '2024-08-30T08:10:01Z',
                name: 'Vitality',
                slug: 'vitality-rl'
              },
              type: 'Team'
            },
            {
              opponent: {
                acronym: 'TS',
                id: 130656,
                image_url:
                  'https://cdn.pandascore.co/images/team/image/130656/190px_team_secret_lightmode.png',
                location: 'US',
                modified_at: '2024-08-30T08:10:06Z',
                name: 'Team Secret',
                slug: 'team-secret-rl'
              },
              type: 'Team'
            }
          ],
          scheduled_at: '2024-09-10T19:00:00Z',
          league_id: 4834,
          winner: null,
          original_scheduled_at: '2024-09-10T21:00:00Z',
          winner_type: 'Team',
          tournament_id: 14455
        },
        {
          match_type: 'best_of',
          serie_id: 7907,
          winner_id: null,
          status: 'not_started',
          begin_at: '2024-09-10T20:00:00Z',
          rescheduled: true,
          slug: 'gen-g-mobil1-racing-vs-pwr-2024-09-10',
          id: 1032248,
          serie: {
            begin_at: '2024-09-10T16:00:00Z',
            end_at: '2024-09-16T01:00:00Z',
            full_name: '2024',
            id: 7907,
            league_id: 4834,
            modified_at: '2024-08-30T08:26:14Z',
            name: '',
            season: null,
            slug: 'rl-rlcs-world-championship-2024',
            winner_id: null,
            winner_type: 'Team',
            year: 2024
          },
          name: 'Round 1: GENG vs PWR',
          detailed_stats: true,
          modified_at: '2024-09-07T00:39:08Z',
          game_advantage: null,
          number_of_games: 5,
          tournament: {
            begin_at: '2024-09-10T16:00:00Z',
            detailed_stats: true,
            end_at: '2024-09-13T02:00:00Z',
            has_bracket: false,
            id: 14455,
            league_id: 4834,
            live_supported: false,
            modified_at: '2024-08-30T08:26:14Z',
            name: 'Swiss Stage',
            prizepool: null,
            serie_id: 7907,
            slug: 'rl-rlcs-world-championship-2024-swiss-stage',
            tier: 's',
            winner_id: null,
            winner_type: 'Team'
          },
          forfeit: false,
          end_at: null,
          draw: false,
          results: [
            {
              score: 0,
              team_id: 133385
            },
            {
              score: 0,
              team_id: 131229
            }
          ],
          games: [
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31546,
              length: null,
              match_id: 1032248,
              position: 1,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            },
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31547,
              length: null,
              match_id: 1032248,
              position: 2,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            },
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31548,
              length: null,
              match_id: 1032248,
              position: 3,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            },
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31549,
              length: null,
              match_id: 1032248,
              position: 4,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            },
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31550,
              length: null,
              match_id: 1032248,
              position: 5,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            }
          ],
          opponents: [
            {
              opponent: {
                acronym: 'GENG',
                id: 133385,
                image_url:
                  'https://cdn.pandascore.co/images/team/image/133385/600px_gen.g_mobil1_racing_2023_full_lightmode.png',
                location: 'US',
                modified_at: '2024-08-30T08:10:03Z',
                name: 'Gen.G Mobil1 Racing',
                slug: 'gen-g-mobil1-racing'
              },
              type: 'Team'
            },
            {
              opponent: {
                acronym: 'PWR',
                id: 131229,
                image_url:
                  'https://cdn.pandascore.co/images/team/image/131229/pwr_full_lightmode.png',
                location: 'AU',
                modified_at: '2024-08-30T08:10:04Z',
                name: 'PWR',
                slug: 'pwr'
              },
              type: 'Team'
            }
          ],
          scheduled_at: '2024-09-10T20:00:00Z',
          league_id: 4834,
          winner: null,
          original_scheduled_at: '2024-09-10T18:00:00Z',
          winner_type: 'Team',
          tournament_id: 14455
        },
        {
          match_type: 'best_of',
          serie_id: 7907,
          winner_id: null,
          status: 'not_started',
          begin_at: '2024-09-10T21:00:00Z',
          rescheduled: true,
          slug: 'furia-esports-vs-og-2024-09-11',
          id: 1032252,
          serie: {
            begin_at: '2024-09-10T16:00:00Z',
            end_at: '2024-09-16T01:00:00Z',
            full_name: '2024',
            id: 7907,
            league_id: 4834,
            modified_at: '2024-08-30T08:26:14Z',
            name: '',
            season: null,
            slug: 'rl-rlcs-world-championship-2024',
            winner_id: null,
            winner_type: 'Team',
            year: 2024
          },
          name: 'FURIA vs OG',
          detailed_stats: true,
          modified_at: '2024-09-07T00:40:04Z',
          game_advantage: null,
          number_of_games: 5,
          tournament: {
            begin_at: '2024-09-10T16:00:00Z',
            detailed_stats: true,
            end_at: '2024-09-13T02:00:00Z',
            has_bracket: false,
            id: 14455,
            league_id: 4834,
            live_supported: false,
            modified_at: '2024-08-30T08:26:14Z',
            name: 'Swiss Stage',
            prizepool: null,
            serie_id: 7907,
            slug: 'rl-rlcs-world-championship-2024-swiss-stage',
            tier: 's',
            winner_id: null,
            winner_type: 'Team'
          },
          forfeit: false,
          end_at: null,
          draw: false,
          results: [
            {
              score: 0,
              team_id: 128933
            },
            {
              score: 0,
              team_id: 134431
            }
          ],
          games: [
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31566,
              length: null,
              match_id: 1032252,
              position: 1,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            },
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31567,
              length: null,
              match_id: 1032252,
              position: 2,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            },
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31568,
              length: null,
              match_id: 1032252,
              position: 3,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            },
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31569,
              length: null,
              match_id: 1032252,
              position: 4,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            },
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31570,
              length: null,
              match_id: 1032252,
              position: 5,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            }
          ],
          opponents: [
            {
              opponent: {
                acronym: 'FURIA',
                id: 128933,
                image_url:
                  'https://cdn.pandascore.co/images/team/image/128933/furia_esportslogo_square.png',
                location: 'BR',
                modified_at: '2024-08-30T08:10:05Z',
                name: 'FURIA Esports',
                slug: 'furia-esports-rl'
              },
              type: 'Team'
            },
            {
              opponent: {
                acronym: 'OG',
                id: 134431,
                image_url:
                  'https://cdn.pandascore.co/images/team/image/134431/600px_og_rb_allmode.png',
                location: 'US',
                modified_at: '2024-08-30T08:10:04Z',
                name: 'OG',
                slug: 'og-rl'
              },
              type: 'Team'
            }
          ],
          scheduled_at: '2024-09-10T21:00:00Z',
          league_id: 4834,
          winner: null,
          original_scheduled_at: '2024-09-10T22:00:00Z',
          winner_type: 'Team',
          tournament_id: 14455
        },
        {
          match_type: 'best_of',
          serie_id: 7907,
          winner_id: null,
          status: 'not_started',
          begin_at: '2024-09-10T22:00:00Z',
          rescheduled: true,
          slug: 'team-bds-vs-oxygen-esports-2024-09-10',
          id: 1032249,
          serie: {
            begin_at: '2024-09-10T16:00:00Z',
            end_at: '2024-09-16T01:00:00Z',
            full_name: '2024',
            id: 7907,
            league_id: 4834,
            modified_at: '2024-08-30T08:26:14Z',
            name: '',
            season: null,
            slug: 'rl-rlcs-world-championship-2024',
            winner_id: null,
            winner_type: 'Team',
            year: 2024
          },
          name: 'Round 1: BDS vs OXG',
          detailed_stats: true,
          modified_at: '2024-09-07T00:40:36Z',
          game_advantage: null,
          number_of_games: 5,
          tournament: {
            begin_at: '2024-09-10T16:00:00Z',
            detailed_stats: true,
            end_at: '2024-09-13T02:00:00Z',
            has_bracket: false,
            id: 14455,
            league_id: 4834,
            live_supported: false,
            modified_at: '2024-08-30T08:26:14Z',
            name: 'Swiss Stage',
            prizepool: null,
            serie_id: 7907,
            slug: 'rl-rlcs-world-championship-2024-swiss-stage',
            tier: 's',
            winner_id: null,
            winner_type: 'Team'
          },
          forfeit: false,
          end_at: null,
          draw: false,
          results: [
            {
              score: 0,
              team_id: 127413
            },
            {
              score: 0,
              team_id: 127530
            }
          ],
          games: [
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31551,
              length: null,
              match_id: 1032249,
              position: 1,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            },
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31552,
              length: null,
              match_id: 1032249,
              position: 2,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            },
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31553,
              length: null,
              match_id: 1032249,
              position: 3,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            },
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31554,
              length: null,
              match_id: 1032249,
              position: 4,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            },
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31555,
              length: null,
              match_id: 1032249,
              position: 5,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            }
          ],
          opponents: [
            {
              opponent: {
                acronym: 'BDS',
                id: 127413,
                image_url:
                  'https://cdn.pandascore.co/images/team/image/127413/team_bd_slogo_square.png',
                location: 'CH',
                modified_at: '2024-08-30T08:10:01Z',
                name: 'Team BDS',
                slug: 'team-bds'
              },
              type: 'Team'
            },
            {
              opponent: {
                acronym: 'OXG',
                id: 127530,
                image_url:
                  'https://cdn.pandascore.co/images/team/image/127530/190px_oxygen_esports_2021_allmode.png',
                location: 'US',
                modified_at: '2024-08-30T08:10:07Z',
                name: 'Oxygen Esports',
                slug: 'oxygen-esports-rl'
              },
              type: 'Team'
            }
          ],
          scheduled_at: '2024-09-10T22:00:00Z',
          league_id: 4834,
          winner: null,
          original_scheduled_at: '2024-09-10T19:00:00Z',
          winner_type: 'Team',
          tournament_id: 14455
        },
        {
          match_type: 'best_of',
          serie_id: 7907,
          winner_id: null,
          status: 'not_started',
          begin_at: '2024-09-10T23:00:00Z',
          rescheduled: false,
          slug: 'spacestation-gaming-vs-karmine-corp-2024-09-11',
          id: 1032253,
          serie: {
            begin_at: '2024-09-10T16:00:00Z',
            end_at: '2024-09-16T01:00:00Z',
            full_name: '2024',
            id: 7907,
            league_id: 4834,
            modified_at: '2024-08-30T08:26:14Z',
            name: '',
            season: null,
            slug: 'rl-rlcs-world-championship-2024',
            winner_id: null,
            winner_type: 'Team',
            year: 2024
          },
          name: 'SSG vs KC',
          detailed_stats: true,
          modified_at: '2024-08-30T08:26:14Z',
          game_advantage: null,
          number_of_games: 5,
          tournament: {
            begin_at: '2024-09-10T16:00:00Z',
            detailed_stats: true,
            end_at: '2024-09-13T02:00:00Z',
            has_bracket: false,
            id: 14455,
            league_id: 4834,
            live_supported: false,
            modified_at: '2024-08-30T08:26:14Z',
            name: 'Swiss Stage',
            prizepool: null,
            serie_id: 7907,
            slug: 'rl-rlcs-world-championship-2024-swiss-stage',
            tier: 's',
            winner_id: null,
            winner_type: 'Team'
          },
          forfeit: false,
          end_at: null,
          draw: false,
          results: [
            {
              score: 0,
              team_id: 126303
            },
            {
              score: 0,
              team_id: 129570
            }
          ],
          games: [
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31571,
              length: null,
              match_id: 1032253,
              position: 1,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            },
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31572,
              length: null,
              match_id: 1032253,
              position: 2,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            },
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31573,
              length: null,
              match_id: 1032253,
              position: 3,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            },
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31574,
              length: null,
              match_id: 1032253,
              position: 4,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            },
            {
              begin_at: null,
              complete: false,
              detailed_stats: true,
              end_at: null,
              finished: false,
              forfeit: false,
              id: 31575,
              length: null,
              match_id: 1032253,
              position: 5,
              status: 'not_started',
              winner: {
                id: null,
                type: 'Team'
              },
              winner_type: 'Team'
            }
          ],
          opponents: [
            {
              opponent: {
                acronym: 'SSG',
                id: 126303,
                image_url:
                  'https://cdn.pandascore.co/images/team/image/126303/196px_spacestation_gaming.png',
                location: 'US',
                modified_at: '2024-08-30T08:10:03Z',
                name: 'Spacestation Gaming',
                slug: 'spacestation-gaming-rl'
              },
              type: 'Team'
            },
            {
              opponent: {
                acronym: 'KC',
                id: 129570,
                image_url:
                  'https://cdn.pandascore.co/images/team/image/129570/600px_karmine_corp_lightmode_full.png',
                location: 'FR',
                modified_at: '2024-08-30T08:10:02Z',
                name: 'Karmine Corp',
                slug: 'karmine-corp-rl'
              },
              type: 'Team'
            }
          ],
          scheduled_at: '2024-09-10T23:00:00Z',
          league_id: 4834,
          winner: null,
          original_scheduled_at: '2024-09-10T23:00:00Z',
          winner_type: 'Team',
          tournament_id: 14455
        }
      ] as PSMatch[]
    }
  }
}

export default PandaScoreService
