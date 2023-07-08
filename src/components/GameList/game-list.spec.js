import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import GameList from "./index.tsx";

describe("GameList Component", () => {

  let games;

  beforeEach(() => {
    games = {
      data: [
        {
          id: 1,
          date: '2020-01-01',
          home_team: {
            id: 1,
            abbreviation: 'CHI',
            city: 'Chicago',
            conference: 'East',
            division: 'Central',
            full_name: 'Chicago Bulls',
            name: 'Bulls'
          },
          home_team_score: 100,
          visitor_team: {
            id: 2,
            abbreviation: 'NYK',
            city: 'New York',
            conference: 'East',
            division: 'Atlantic',
            full_name: 'New York Knicks',
            name: 'Knicks'
          },
          visitor_team_score: 90,
          jordan: '',
        }
      ],
      meta: {
        total_pages: 5,
        current_page: 1,
        next_page: null,
        per_page: 1,
        total_count: 1
      }
    }
  });

  it("render the game list", () => {
    render(<GameList initialData={games}/>);
    const element = screen.getByText(/Siguiente/i);
    expect(element).toBeInTheDocument();
  });
})