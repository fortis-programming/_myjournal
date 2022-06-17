import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from 'src/environments/environment';
import { getFirestore } from '@firebase/firestore';
import {
  onSnapshot,
  collection,
  query,
  doc,
  deleteDoc,
  setDoc,
  orderBy,
} from 'firebase/firestore';
import { PostModel } from '../_shared/models/post';

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  constructor() {}

  async getWorks(): Promise<PostModel[]> {
    const listHolder: PostModel[] = [];
    const q = query(collection(firestore, 'Post'), orderBy('date', 'desc'));
    await onSnapshot(q, (snapshot) => {
      snapshot.forEach((docData) => {
        listHolder.push(JSON.parse(JSON.stringify(docData.data())));
      });
    });
    return listHolder;
  }

  async deletePost(docId: number): Promise<any> {
    deleteDoc(doc(firestore, 'Post', docId.toString()));
  }

  async addPost(post: PostModel) {
    await setDoc(doc(firestore, 'Post', post.id.toString()), post);
  }
}
