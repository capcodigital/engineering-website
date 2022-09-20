import * as React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "../index";

const links = [ // update locations
    { text: 'Capabilities', location: "/" },
    { text: 'Team', location: "/" },
    { text: 'Career', location: "/" },
    { text: 'Articles', location: "/" },
    { text: 'Capco.com', location: "/" },
];

describe('NavBar tests', () => {
    it('Should render Navbar with Engineering text', () => {
        render(<NavBar />);
        expect(screen.getByText(/Engineering/i)).toBeInTheDocument()
    });

    // it('should direct navbar links to their relevant paths', () => {
    //     test.each(links)(
    //         "Check Navbar has appropriate links and connections",
    //         (link) => {
    //             render(NavBar());
    //             const linkDom = screen.getByText(link.text); 
                    
    //             expect(linkDom).toHaveAttribute("href", link.location);
    //         }
    //     );
    // });
});