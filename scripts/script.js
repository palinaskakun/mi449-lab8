import { createClient } from "https://esm.sh/@supabase/supabase-js"
const supabaseUrl = 'https://ddsqshjscdhbfesjddwe.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkc3FzaGpzY2RoYmZlc2pkZHdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE0MTA3MTYsImV4cCI6MjAyNjk4NjcxNn0.vgGmDgVnE59SbNLDOJvCvjdzYp9gM4HWly3DGfFZlKU'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: books, error } = await supabase
    .from('books')
    .select('*')

    for (let book of books) {
      let bookList = document.getElementById('books');
      bookList.innerHTML += `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.ISBN}</td>
        `;

  }
}

  getBooks();

