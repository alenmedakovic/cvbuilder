# CV Builder

A React front-end application for creating professional looking CVs with a drag and drop interface.

## Features

- Drag and drop interface for adding and rearranging CV sections
- Pre-designed templates to choose from
- Customization options for fonts, colors, and layout
- Download as PDF or print directly from the application

## Getting Started

1. Clone the repository: `git clone https://github.com/your-username/cv-builder.git`
2. Navigate to the project directory: `cd cv-builder`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

## Build for Production

1. Build the production version of the app: `npm run build`
2. The production-ready version of the app will be in the `build` directory.

## Deployment

The built app can be deployed to a static file server, such as [Netlify](https://www.netlify.com/). Simply upload the contents of the `build` directory to your chosen hosting service.

## License

This project is licensed under the MIT License.

# TODO MVP (Minimum Viable Product)

1. Make one CV template (make it consist of for example 5 react components: header component, education component, work experience component, side projects component, skills component).
2. Make one variation of each of the 5 react components above. Just simple variations first.
3. Make 2 drag and drop boxes in React. Call them "CV box" and "Components box" for example. There are libraries to do this and ChatGPT can give an outline for solution. When components are dragged from the CV box to the components box, the component should be moved from the CV box to the components box and stay there. The opposite should also work.
4. Make the CV box PDF downloadable. Use library that can render HTML to a PDF file.