import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getPostsDirectory = (blogPostsFolderName = 'posts') => {
  return path.join(process.cwd(), blogPostsFolderName);
  // return path.join(__dirname, blogPostsFolderName);
};

export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  // return an array that lloks like this:
  // [{ params: { postId: 'hello' } }, { params: { postId: 'good-morning' } }];

  return fileNames.map((fileName) => ({
    params: { postId: fileName.replace(/\.md$/, '') },
  }));
};

export const getPostData = (postId) => {
  const fullPath = path.join(postsDirectory, `${postId}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  // use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // combine the data with the id
  return { id, ...matterResult.data };
};
