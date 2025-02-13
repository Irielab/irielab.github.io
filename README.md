# 入江研究室 Web ページ


# Multi-Task Learning for Ultrasonic Echo-Based Depth Estimation with Audible Frequency Recovery

Junpei Honma, Akisato Kimura, Go Irie

Echo-based depth estimation has been explored as a promising alternative solution.
We explore depth estimation based on ultrasonic echoes, which has scarcely been explored so far. 
The key idea of our method is to learn a depth estimation model that can exploit useful, but missing information in the audible frequency band.
we propose a multi-task learning approach that requires the model to estimate the depth map from the ultrasound echoes while simultaneously restoring the spectra in the audible frequency range.

[[Paper]](https://arxiv.org/pdf/2409.03336)

<p align="center"><img width="750" alt="top_image" src="https://github.com/user-attachments/assets/555baa15-8845-4f37-a0ca-c78b9c324f94"></p>

## Requirements
The code is tested with
``` 
- Python 3.8.10
- PyTorch 1.12.0
- Numpy 1.22.3
- librosa 0.9.2
- SoundFile 0.10.3
- torchaudio 0.12.0
```

## Dataset

**TUS-Echo** can be obatined from [here](https://github.com/junpeihonma/TUS-Echo). 


## Training

To train the model, first download TUS-Echo dataset from above link. 
```
python train_multitask.py \
--dataset TUS-Echo \
--dataset_path path_to_dataset
```
## Evaluation 

- Evalution for TUS-Echo dataset
```
python test_multitask.py \
--dataset TUS-Echo \
--dataset_path path_to_dataset
```

## Acknowledgements
This work was partially supported by JSPS KAKENHI Grant Number 23K11154.




📂 ファイル構成 (Project Structure)

web-lab-repository/
│── public/                # 静的ファイル (画像・CSS・JS)
│   ├── images/            # 研究室の画像・ロゴ
│   ├── css/               # スタイルシート
│   ├── js/                # JavaScript ファイル
│── src/                   # メインのソースコード
│   ├── index.html         # ホームページの HTML
│   ├── about.html         # 研究室紹介ページ
│   ├── members.html       # メンバー紹介ページ
│── docs/                  # ドキュメント関連
│── README.md              # このファイル
│── .gitignore             # Git 無視ファイル
│── package.json           # npm 依存関係 (必要なら)
│── server.js              # ローカルテスト用サーバー (Node.js)


To the best of our knowledge, there is no publicly available dataset that can be used to evaluate the performance of ultrasonic echo-based depth estimation. We therefore build a data collection system and collect a real echo dataset, which we call TUS-Echo. It consists of audible echoes observed indoors with general chirps above 1hz, ultrasonic echoes observed with chirps above 20kHz, RGB images, and depth maps.
To download TUS-Echo dataset, click <a href="https://drive.google.com/uc?export=download&id=19CAulAIiubRmaWwnkzwRF34ldUK06VJ3">here</a>.

<p align="center"><img width="600" alt="top_image" src="https://github.com/user-attachments/assets/51df21b2-17f8-4e3f-b33c-07d3e5a6a038"></p>

## Data Collection System.
The overview of our data collection system is shown in figure below.
Our system consists of sensors and
sound acquisition devices mounted on a stable cart with suspension.
Four omni-directional ultrasonic microphones (Earthworks M30)
are mounted in a tetrapod shape using clamp arms, and these and
an ultrasound-compatible high-resolution loudspeaker (EDIFIER
S1000MK2) are connected to a PC via an audio interface (TASCAM US-4x4HR). The reason for using four microphones is that
depth map estimation requires capturing the 3D direction of arrival
of the echoes, and to accomplish this, the time difference of arrival
in each of the three directions relative to the reference microphone
needs to be measured. A depth camera (Intel RealSense D400) is
placed in front of the cart for acquiring ground truth depth maps.

<p align="center">
  <img width="500" alt="38" src="https://github.com/user-attachments/assets/910236b3-f9e9-4f2d-869f-1489e1d7ac5f">
</p>

## Data Collection.
The recording environment is a near-rectangular
reverberant studio of 4 m (width) × 10 m (depth) × 3 m (height). We
emitted two types of up-chirp signals from the loudspeaker at each
recording location and direction in the studio; one was an ultrasonic
chirp from 20 kHz to 48 kHz, and the other was an audible chirp
from 1 Hz to 48 kHz. The two types of echoes corresponding to
the two sound sources and a raw depth map of 128 × 128 pixels
were recorded in temporal synchronization. The duration of each
echo sample was 1 second with 96 kHz sampling rate, which was
sufficiently long to accommodate the chirp echoes. We collected
the data at 1,000 distinct locations and orientations, resulting in the
number of samples is 1,000 originated from different room impulse
responses (RIRs). We split the data into training/validation and test
sets in the ratio of 9:1 (896 and 104, respectively).

<p align="center"><img width="600" alt="38" src="https://github.com/user-attachments/assets/75133682-3a75-4671-a62d-e25ebde2c2c5"></p>

## Acknowledgements
This work was partially supported by JSPS KAKENHI Grant Number 23K11154.

