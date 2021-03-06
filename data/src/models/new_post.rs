use crate::models::preface::Preface;
use crate::schema::posts;
use chrono::NaiveDateTime;
use chrono::Utc;
use pulldown_cmark::html;
use pulldown_cmark::Options;
use pulldown_cmark::Parser;

#[derive(Insertable, Serialize, Deserialize, Clone)]
#[table_name = "posts"]
pub struct NewPost {
    pub title: String,
    pub excerpt: String,
    pub body: String,
    pub categories: String,
    pub tags: String,
    pub date: NaiveDateTime,
    pub published: bool,
    pub project: bool,
}

impl NewPost {
    pub fn new(
        title: String,
        excerpt: String,
        body: String,
        categories: String,
        tags: String,
        date: NaiveDateTime,
        published: bool,
        project: bool,
    ) -> Self {
        Self {
            title,
            excerpt,
            body,
            categories,
            tags,
            date,
            published,
            project,
        }
    }

    pub fn parse(input: String) -> Option<NewPost> {
        if input.is_empty() {
            return None;
        }

        if !input.starts_with("---\n") {
            println!("Warning: Post without preface/metadata!");
            return None;
        }

        let parts: Vec<&str> = input.split("---").collect();
        let preface_part = parts.get(1).unwrap();
        let preface: Preface = toml::from_str(preface_part).unwrap();

        println!("Preface: {:?}", preface);

        let markdown = input.split_at(8 + preface_part.len()).1;
        let markdown_split = markdown.splitn(1, "# ").collect::<Vec<&str>>();
        let title_fragment = markdown_split
            .get(0)
            .unwrap()
            .split("\n")
            .collect::<Vec<&str>>();
        let title = title_fragment.get(0).unwrap().replace("# ", "");
        println!("Title: {}", title);

        let excerpt_fragment = markdown_split
            .get(0)
            .unwrap()
            .split("\n\n")
            .collect::<Vec<&str>>();
        let excerpt_markdown = excerpt_fragment.get(1).unwrap().to_string();
        println!("Excerpt (MD): {}", excerpt_markdown);
        let excerpt = NewPost::markdown_to_html(&excerpt_markdown);
        println!("Excerpt (HTML): {}", excerpt);

        let markdown_without_title: &str = &markdown[markdown.find('\n').unwrap_or(0)..];
        let html = NewPost::markdown_to_html(&markdown_without_title);

        let date = match preface.date() {
            Some(date) => date,
            None => Utc::now().naive_utc(),
        };

        Some(NewPost::new(
            title,
            excerpt,
            html,
            preface.categories(),
            preface.tags(),
            date,
            preface.published.unwrap_or(false),
            preface.project.unwrap_or(false),
        ))
    }

    fn markdown_to_html(markdown_input: &str) -> String {
        // Setup parser with special options
        let parser = Parser::new_ext(markdown_input, Options::all());

        // Convert markdown to html
        let mut html_output = String::new();
        html::push_html(&mut html_output, parser);
        html_output
    }
}
