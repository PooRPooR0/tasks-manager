import {useMemo} from 'react';

export const useSortedPosts = (posts) => {
    const sortedPosts = useMemo(() => {
        return [...posts].sort((a, b) => a.dedline - b.dedline)
    }, [ posts]);

    return sortedPosts;
}

export const usePosts = (posts, query, group, status) => {
    const sortedPosts = useSortedPosts(posts);
    
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter( post => post.title.toLowerCase().includes(query.toLowerCase()) && (post.group.id == group.id) && (post.status == status || status == -1))
    }, [query, sortedPosts, group, status]);
    
    return sortedAndSearchedPosts;
}