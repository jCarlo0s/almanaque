import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import MatchCard from './index.tsx';

describe('MatchCard Component', () => {
  let params;

  beforeEach(() => {
    params = {
        homeTeam: {
          id: 24,
          abbreviation: 'PHX',
          city: 'Phoenix',
          conference: 'West',
          division: 'Pacific',
          full_name: 'Phoenix Suns',
          name: 'Suns'
        },
        visitorTeam: {
          id: 13,
          abbreviation: 'LAC',
          city: 'LA',
          conference: 'West',
          division: 'Pacific',
          full_name: 'LA Clippers',
          name: 'Clippers'
        },
        playDate: '2019-10-26T00:00:00.000Z',
        homeTeamScore: 130,
        visitorTeamScore: 122
      }
  });

  it('render the match card', () => {
    render(<MatchCard
      homeTeam={params.homeTeam}
      visitorTeam={params.visitorTeam}
      playDate={params.playDate}
      homeTeamScore={params.homeTeamScore}
      visitorTeamScore={params.visitorTeamScore}
    />);
    const element = screen.getByText(/Phoenix/i);
    expect(element).toBeInTheDocument();
  });

  it('render the winner with the correct color class', () => {
    render(<MatchCard
      homeTeam={params.homeTeam}
      visitorTeam={params.visitorTeam}
      playDate={params.playDate}
      homeTeamScore={params.homeTeamScore}
      visitorTeamScore={params.visitorTeamScore}
    />);
    const element = screen.getByTestId('home-team-score')
    expect(element.classList.contains('text-green-800')).toBe(true); 
  });

  it('render the looser with the correct color class', () => {
    render(<MatchCard
      homeTeam={params.homeTeam}
      visitorTeam={params.visitorTeam}
      playDate={params.playDate}
      homeTeamScore={params.homeTeamScore}
      visitorTeamScore={params.visitorTeamScore}
    />);
    const element = screen.getByTestId('visitor-team-score')
    expect(element.classList.contains('text-red-800')).toBe(true); 
  });
  
});